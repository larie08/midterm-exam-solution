// greeting.js
const express = require('express');
const bodyParser = require('body-parser'); // To parse JSON request bodies
const { addTask, getTasks, getTaskById, updateTask, deleteTask } = require('./models/Task'); // Import task functions
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to get all tasks
app.get('/tasks', (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
});

// Route to get a task by ID
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = getTaskById(taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Route to create a new task
app.post('/tasks', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }
  const newTask = addTask(name, description);
  res.status(201).json(newTask);
});

// Route to update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { name, description } = req.body;
  const updatedTask = updateTask(taskId, name, description);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Route to delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const deletedTask = deleteTask(taskId);
  if (deletedTask) {
    res.json(deletedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
