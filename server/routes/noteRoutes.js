const express = require('express');
const router = express.Router();
const {
  createNote,
  getNotes,
  deleteNote,
} = require('../controllers/noteController');

// POST /api/notes -> Create a note
router.post('/', createNote);

// GET /api/notes -> Get all notes or filter by tag
router.get('/', getNotes);

// DELETE /api/notes/:id -> Delete a note by ID
router.delete('/:id', deleteNote);

module.exports = router;
