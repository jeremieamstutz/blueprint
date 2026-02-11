# The Blueprint

**The Blueprint** is a CLI tool that creates a folder tree structure based on a template file.

## 📋 Templates

Currently, there are two high quality templates available:

- `personal`: for your personal digital assets
- `company`: for your company's digital assets

### Template Definition
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

### Template Output
```
000 IT & Systems/
├── 010 Computer Setup/
│   ├── 011 Operating systems/
│   ├── 012 System preferences/
│   ├── 013 Installed applications/
│   └── 014 Organization/
└── 020 Backup & Recovery/
    ├── 021 Backup schedules/
    └── 022 Recovery media/
```

## 🚀 Usage

```bash
npx blueprint create <template>
```

*Example:*
```bash
npx blueprint create personal
```

## 📄 License

This project is licensed under the MIT License. Your are free to use, modify and distribute the code as you see fit. See the [LICENSE](LICENSE.md) file for details.

## 🤝 Contributing

Feel free to fork this project and adapt it to your needs. Suggestions and improvements are welcome!

---

**Happy organizing!** 🗂️