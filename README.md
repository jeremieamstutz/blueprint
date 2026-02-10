# lifeOS — The Blueprint for Your Digital Life

**lifeOS** generates a hierarchical folder structure from a text-based taxonomy file: perfect for organizing your personal digital life.

## 📋 Overview

**lifeOS** reads a taxonomy file (`taxonomy.txt`) and creates a corresponding folder structure a `lifeOS` directory. The taxonomy uses indentation to represent hierarchy, making it easy to define and maintain complex organizational structures.

## ✨ Features

- **Hierarchical Structure**: Automatically creates nested folders based on indentation levels
- **Numbered Taxonomy**: Supports numbered prefixes (e.g., `000`, `010`, `011`) for easy organization
- **Simple Input Format**: Uses plain text with indentation (4 spaces per level)
- **Idempotent**: Safe to run multiple times - won't recreate existing folders
- **Clear Output**: Provides console feedback showing which folders were created or already exist

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
   ```bash
   cd lifeOS
   ```
3. Review and update the `taxonomy.txt` file to your liking.
4. Run the script to create the folder structure
   ```bash
   node create-lifeOS.js
   ```
5. The folder structure will be created in the `lifeOS` directory
 

## 📁 Project Structure

```
lifeOS/
├── create-lifeOS.js           # Main script
├── taxonomy.txt               # Input taxonomy file
├── package.json               # Project metadata
├── README.md                  # This file
└── lifeOS/                    # Generated folder structure (created by script)
```

## 📝 Taxonomy File Format

The `taxonomy.txt` file uses indentation to represent folder hierarchy:

- **4 spaces** = 1 level of indentation
- Each line represents a folder name
- Empty lines are ignored
- Numbered prefixes are preserved as part of the folder name

### Example

```
000 IT & Systems
    010 Computer Setup
        011 Operating systems
        012 System preferences
        013 Installed applications
        014 Organization
    020 Backup & Recovery
        021 Backup schedules
        022 Recovery media
```

This will create:
```
lifeOS/
└── 000 IT & Systems/
    ├── 010 Computer Setup/
    │   ├── 011 Operating systems/
    │   ├── 012 System preferences/
    │   ├── 013 Installed applications/
    │   └── 014 Organization/
    └── 020 Backup & Recovery/
        ├── 021 Backup schedules/
        └── 022 Recovery media/
```

## 🔧 How It Works

1. **Parse**: Reads `taxonomy.txt` line by line
2. **Analyze**: Determines hierarchy level from indentation (4 spaces = 1 level)
3. **Build Tree**: Constructs an in-memory tree structure
4. **Create Folders**: Recursively creates directories based on the tree structure

## 📊 Features Explained

### Indentation Levels

- Level 0: No indentation (root folders)
- Level 1: 4 spaces
- Level 2: 8 spaces
- Level 3: 12 spaces
- And so on...

### Safe Execution

The script checks if folders already exist before creating them, so you can safely run it multiple times without errors.

## 📄 License

This project is licensed under the MIT License. Your are free to use, modify and distribute the code as you see fit. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and adapt it to your needs. Suggestions and improvements are welcome!

## 💡 Tips

- Keep your `taxonomy.txt` file organized
- Use consistent numbering schemes for easier navigation
- Consider version controlling your taxonomy file to track changes over time

---

**Happy organizing!** 🗂️