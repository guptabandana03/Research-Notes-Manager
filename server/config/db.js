const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../data/notes.db'),
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('SQLite database connected and synced');
  } catch (error) {
    console.error('SQLite connection error:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
