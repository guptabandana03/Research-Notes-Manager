const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'General',
  },
}, {
  timestamps: true,
  tableName: 'notes',
});

module.exports = Note;
