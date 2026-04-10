import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';
import FilterBar from './components/FilterBar';
import { fetchNotes, createNote, deleteNote } from './api/notesApi';

// Use relative API URL for production (same origin), localhost for development
const API_BASE = import.meta.env.DEV ? 'http://localhost:5000/api/notes' : '/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadNotes = async (tag) => {
    setLoading(true);
    setError('');

    try {
      const fetchedNotes = await fetchNotes(API_BASE, tag);
      setNotes(fetchedNotes);
    } catch (err) {
      setError(err.message || 'Unable to load notes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes(selectedTag === 'All' ? null : selectedTag);
  }, [selectedTag]);

  const handleCreate = async (data) => {
    setLoading(true);
    setError('');

    try {
      await createNote(API_BASE, data);
      await loadNotes(selectedTag === 'All' ? null : selectedTag);
    } catch (err) {
      setError(err.message || 'Unable to create note.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError('');

    try {
      await deleteNote(API_BASE, id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      setError(err.message || 'Unable to delete note.');
    } finally {
      setLoading(false);
    }
  };

  const tags = ['All', 'AI', 'Research', 'Ideas', 'General'];

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Research Notes Manager</h1>
          <p>Store your research ideas, AI notes, and project reminders.</p>
        </div>
      </header>

      <main className="app-content">
        <section className="panel">
          <h2>Add a New Note</h2>
          <NoteForm onSubmit={handleCreate} />
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Your Notes</h2>
            <FilterBar
              tags={tags}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
          </div>

          {loading ? (
            <p className="status-message">Loading notes...</p>
          ) : error ? (
            <p className="status-message error">{error}</p>
          ) : notes.length === 0 ? (
            <p className="status-message">No notes found. Add one above.</p>
          ) : (
            <div className="notes-grid">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
