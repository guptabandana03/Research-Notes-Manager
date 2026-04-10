const Note = require('../models/Note');

// Create a new note
const createNote = (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const note = Note.create({ title, description, tag });
    return res.status(201).json(note);
  } catch (error) {
    console.error('Create note error:', error.message);
    return res.status(500).json({ message: 'Server error while creating note' });
  }
};

// Get notes, optionally filtered by tag
const getNotes = (req, res) => {
  try {
    const options = { order: [['createdAt', 'DESC']] };
    if (req.query.tag) {
      options.where = { tag: req.query.tag };
    }

    const notes = Note.findAll(options);
    return res.json(notes);
  } catch (error) {
    console.error('Get notes error:', error.message);
    return res.status(500).json({ message: 'Server error while fetching notes' });
  }
};

// Delete a note by ID
const deleteNote = (req, res) => {
  try {
    const note = Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    note.destroy();
    return res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Delete note error:', error.message);
    return res.status(500).json({ message: 'Server error while deleting note' });
  }
};

module.exports = {
  createNote,
  getNotes,
  deleteNote,
};
