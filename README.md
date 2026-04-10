# Research Notes Manager

A complete full-stack application for creating, viewing, filtering, and deleting research notes. Built with React (Vite) on the frontend, Express and Node.js on the backend, and SQLite with Sequelize ORM.

## Project Overview

Research Notes Manager helps users store and organize notes with title, description, and tag fields. Notes can be filtered by tag and are displayed in a responsive card layout. Data is persisted in a local SQLite database.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: SQLite
- ORM: Sequelize
- Environment variables: dotenv
- Middleware: CORS, express.json
- HTTP client: Axios

## Folder Structure

```
server/
│── config/
│   └── db.js
│── controllers/
│   └── noteController.js
│── data/
│   └── notes.db (auto-created)
│── models/
│   └── Note.js
│── routes/
│   └── noteRoutes.js
│── .env
│── index.js
│── package.json

client/
│── index.html
│── package.json
│── vite.config.js
│── src/
│   ├── api/
│   │   └── notesApi.js
│   ├── components/
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   └── FilterBar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx

.gitignore
README.md
```

## Setup Instructions

### Prerequisites

- Node.js and npm installed

### Backend Setup

1. Open a terminal in the `server` folder.
2. Run `npm install`.
3. The `.env` file already exists with `PORT=5000`.
4. Start the backend server:

```bash
node index.js
```

The backend will run at `http://localhost:5000` and create a SQLite database at `server/data/notes.db`.

### Frontend Setup

1. Open a terminal in the `client` folder.
2. Run `npm install`.
3. Start the frontend development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`.

## API Endpoints

### Create a note

- Method: `POST`
- URL: `/api/notes`
- Body:
  - `title` (string, required)
  - `description` (string, optional)
  - `tag` (string, optional)

Example:
```json
{
  "title": "React Hooks",
  "description": "Learn about useState and useEffect",
  "tag": "AI"
}
```

### Get all notes

- Method: `GET`
- URL: `/api/notes`

### Get notes by tag

- Method: `GET`
- URL: `/api/notes?tag=AI`

### Delete a note

- Method: `DELETE`
- URL: `/api/notes/:id`

## Features

- ✅ Create notes with title, description, and tags
- ✅ View all notes in a responsive card layout
- ✅ Filter notes by tag (AI, Research, Ideas, General)
- ✅ Delete notes
- ✅ Error handling and loading states
- ✅ Clean, professional UI with Tailwind-inspired styling
- ✅ Fully responsive design

## Deployment on Render

### Backend (Web Service)
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `node index.js`

### Frontend (Static Site)
- **Root Directory**: `client`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

### Environment Variables
**Backend:**
- `PORT`: `10000` (auto-assigned by Render)

**Frontend:**
- `VITE_API_BASE_URL`: `https://your-backend-name.onrender.com/api/notes`

## Database

SQLite database is automatically created at `server/data/notes.db` on first run. The database includes:

- **Notes Table**: id, title, description, tag, createdAt, updatedAt

## Notes

- The frontend is configured to call the backend at `http://localhost:5000`.
- Use the `NoteForm` component to add new notes.
- The `FilterBar` component allows filtering notes by tag.
- Notes are displayed using the `NoteCard` component.
- All changes are persisted in the SQLite database.

## Troubleshooting

**Issue**: Port 5000 or 5173 already in use
- Solution: Kill the process using the port or change the PORT in `.env`

**Issue**: SQLite database not created
- Solution: Ensure `server/data/` directory exists or restart the backend

**Issue**: Frontend not connecting to backend
- Solution: Verify backend is running at `http://localhost:5000`
