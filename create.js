#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATES_DIR = path.join(__dirname, 'templates');

/**
 * Parse a line and determine its indent level and content
 * @param {string} line - The line to parse
 * @returns {object|null} - { level, content } or null if empty line
 */
function parseLine(line) {
    if (!line.trim()) return null;
    
    // Count leading spaces (4 spaces = 1 level)
    const leadingSpaces = line.match(/^(\s*)/)[1].length;
    const level = Math.floor(leadingSpaces / 4);
    const content = line.trim();
    
    return { level, content };
}

/**
 * Build a tree structure from the parsed lines
 * @param {string[]} lines - Array of lines from the file
 * @returns {object[]} - Tree structure of folders
 */
function buildTree(lines) {
    const root = [];
    const stack = [{ level: -1, children: root }];
    
    for (const line of lines) {
        const parsed = parseLine(line);
        if (!parsed) continue;
        
        const { level, content } = parsed;
        const node = { name: content, children: [] };
        
        // Find the correct parent
        while (stack.length > 1 && stack[stack.length - 1].level >= level) {
            stack.pop();
        }
        
        // Add to parent's children
        stack[stack.length - 1].children.push(node);
        
        // Push this node onto the stack
        stack.push({ level, children: node.children });
    }
    
    return root;
}

/**
 * Create folders recursively from the tree structure
 * @param {object[]} nodes - Array of tree nodes
 * @param {string} parentPath - Parent directory path
 */
function createFolders(nodes, parentPath) {
    for (const node of nodes) {
        const folderPath = path.join(parentPath, node.name);
        
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created: ${folderPath}`);
        } else {
            console.log(`Exists:  ${folderPath}`);
        }
        
        if (node.children && node.children.length > 0) {
            createFolders(node.children, folderPath);
        }
    }
}

/**
 * Main function
 */
function main() {
    const [, , command, templateName] = process.argv;

    if (command !== 'create' || !templateName) {
        console.error('Usage: blueprint create <template>');
        console.error('Example: blueprint create personal');
        process.exit(1);
    }

    const templatePath = path.join(TEMPLATES_DIR, `${templateName}.txt`);

    if (!fs.existsSync(templatePath)) {
        console.error(`Error: Template not found: ${templateName}`);
        console.error(`Looking for: ${templatePath}`);
        process.exit(1);
    }

    const outputDir = process.cwd();
    console.log(`Blueprint: creating "${templateName}" in ${outputDir}\n`);

    const content = fs.readFileSync(templatePath, 'utf-8');
    const lines = content.split('\n');
    const tree = buildTree(lines);

    createFolders(tree, outputDir);
    console.log('\nDone.');
}

main();