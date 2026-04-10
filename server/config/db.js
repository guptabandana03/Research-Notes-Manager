const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '../data/notes.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Simple JSON database functions
const readDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return [];
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing database:', error);
  }
};

const connectDB = () => {
  // Ensure database file exists
  if (!fs.existsSync(DB_FILE)) {
    writeDB([]);
  }
  console.log('JSON database initialized');
};

module.exports = { readDB, writeDB, connectDB };
