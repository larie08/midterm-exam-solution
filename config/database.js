// config/database.js
const { Sequelize } = require('sequelize');

// Create a Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('midterm.db', 'your_database_user', 'your_database_password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;