require('dotenv').config(); // Load environment variables
const express = require('express');
const sequelize = require('.database'); // Import sequelize instance

const question3 = express();
const port = 3000;

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
