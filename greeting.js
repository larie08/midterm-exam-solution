const express = require('express');
const delayedGreeting = require('./greeting'); 
const app = express();
const port = 3000;


app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  delayedGreeting(name);
  res.send(`Greeting for ${name} will be logged in 2 seconds!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
