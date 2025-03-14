const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory task storage (using JavaScript array)
let tasks = [];

// Route to create a new task (POST)
app.post('/tasks', (req, res) => {
  const { name, description } = req.body;

  // Generate a new task object
  const newTask = {
    id: tasks.length + 1,  // Automatically assigning a unique id
    name,
    description,
  };

  tasks.push(newTask); // Add the new task to the array
  res.status(201).json(newTask); // Send the created task back as a response
});

// Route to get all tasks (GET)
app.get('/tasks', (req, res) => {
  res.json(tasks); // Return the list of all tasks
});

// Route to update a task (PUT)
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { name, description } = req.body;

  // Find the task with the matching id
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  // Update task properties
  task.name = name || task.name;
  task.description = description || task.description;

  res.json(task); // Send the updated task as a response
});

// Route to delete a task (DELETE)
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);

  // Find the index of the task with the matching id
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  // Remove the task from the array
  tasks.splice(taskIndex, 1);

  res.status(200).json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
