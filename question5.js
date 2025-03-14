require('dotenv').config(); // Load environment variables from the .env file
const { Sequelize } = require('sequelize');

// Set up Sequelize with MySQL database configuration using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,   // Use host from environment variable
  dialect: 'mysql',            // The dialect we're using (MySQL)
  logging: false,              // Disable logging SQL queries
});

module.exports = sequelize;
