const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../config/db');

class Note {
  constructor(data) {
    this.id = data.id || uuidv4();
    this.title = data.title;
    this.description = data.description || '';
    this.tag = data.tag || 'General';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = new Date();
  }

  static findAll(options = {}) {
    const notes = readDB();
    let filteredNotes = notes;

    // Apply where conditions
    if (options.where) {
      filteredNotes = notes.filter(note => {
        return Object.keys(options.where).every(key => {
          return note[key] === options.where[key];
        });
      });
    }

    // Apply ordering
    if (options.order && options.order.length > 0) {
      const [field, direction] = options.order[0];
      filteredNotes.sort((a, b) => {
        if (direction === 'DESC') {
          return new Date(b[field]) - new Date(a[field]);
        }
        return new Date(a[field]) - new Date(b[field]);
      });
    }

    return filteredNotes;
  }

  static findByPk(id) {
    const notes = readDB();
    return notes.find(note => note.id === id) || null;
  }

  static create(data) {
    const notes = readDB();
    const newNote = new Note(data);
    notes.push(newNote);
    writeDB(notes);
    return newNote;
  }

  destroy() {
    const notes = readDB();
    const filteredNotes = notes.filter(note => note.id !== this.id);
    writeDB(filteredNotes);
    return true;
  }

  save() {
    const notes = readDB();
    const index = notes.findIndex(note => note.id === this.id);
    if (index !== -1) {
      notes[index] = this;
      writeDB(notes);
    }
    return this;
  }
}

module.exports = Note;
