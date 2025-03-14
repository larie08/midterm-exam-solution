// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
