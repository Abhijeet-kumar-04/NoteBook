# 📝 NoteBook - Simple Notes Web Application

A lightweight, full-stack web application for creating, reading, editing, and deleting notes. Built with Node.js, Express, and EJS, NoteBook provides a clean and intuitive interface for managing your digital notes.

**Live Demo:** https://notebook-7qpw.onrender.com

---

## ✨ Features

- ✅ **Create Notes** - Add new notes with a title and content
- ✅ **View Notes** - Display all notes in a beautiful card layout
- ✅ **Read More** - Expand and view complete note content
- ✅ **Edit Notes** - Modify existing note content
- ✅ **Delete Notes** - Remove notes you no longer need
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **File-Based Storage** - Notes stored as `.txt` files locally
- ✅ **Fast & Lightweight** - Minimal dependencies for quick performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **EJS** | Server-side templating engine |
| **CSS3** | Modern styling and responsive design |
| **Font Awesome** | Icon library |

---

## 📁 Project Structure

```
NoteBook/
├── index.js                 # Main server file
├── package.json            # Project dependencies
├── package-lock.json       # Locked dependency versions
├── files/                  # Directory storing note files (.txt)
├── public/
│   ├── stylesheets/       # CSS files
│   │   ├── style.css      # Main stylesheet
│   │   ├── style1.css     # Alternative styles
│   │   └── style2.css     # Alternative styles
│   └── images/            # Image assets
│       ├── notebook.png   # Logo/icon
│       ├── notes.png      # Notes icon
│       └── images.jpeg    # Background image
└── views/
    ├── index.ejs          # Homepage template
    ├── read_more.ejs      # Detailed note view
    └── edit_note.ejs      # Note editing template
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhijeet-kumar-04/NoteBook.git
   cd NoteBook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📖 Usage

### Creating a Note
1. Enter a notebook name in the "Enter Notebook Name" field
2. Type your note content in the text area
3. Click "Add Note" button
4. Your note appears in the list below

### Reading a Note
- Click "Read More" on any note card to view the full content

### Editing a Note
- Click "Edit" on a note card
- Modify the content
- Save changes

### Deleting a Note
- Click "Delete" on a note card to remove it permanently

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all notes |
| GET | `/read-more/:filename` | View full note content |
| GET | `/edit-note/:filename` | Edit note page |
| GET | `/delete-note/:filename` | Delete a note |
| POST | `/create` | Create a new note |
| POST | `/edit-note/:filename` | Save edited note |

---

## 🌐 Deployment

### Deployed on Render

The application is deployed on [Render](https://render.com) and is live at: **https://notebook-7qpw.onrender.com**

#### Environment Variables
- `PORT` - Server port (auto-set by Render, defaults to 3000 locally)

#### Build & Start Commands
- **Build Command:** `npm install`
- **Start Command:** `npm start`

---

## 📸 Features Showcase

- **Clean & Modern UI** - Intuitive card-based layout for note management
- **Responsive Design** - Optimized for all screen sizes
- **Real-time Updates** - Instant note creation and deletion
- **Font Awesome Icons** - Professional icons for actions (Edit, Delete, Read More)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests

---

## 📝 License

This project is open source and available under the ISC License.

---

## 👨‍💻 Author

**Abhijeet Kumar**
- GitHub: [@Abhijeet-kumar-04](https://github.com/Abhijeet-kumar-04)
- Repository: [NoteBook](https://github.com/Abhijeet-kumar-04/NoteBook)

---

## 📞 Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/Abhijeet-kumar-04/NoteBook/issues).

---

## 🎯 Future Enhancements

- User authentication (login/signup)
- Cloud storage integration
- Note categories and tags
- Search functionality
- Dark mode theme
- Export notes as PDF
- Sharing notes with others

---

**Happy Note-Taking! 📝✨**
