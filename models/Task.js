// models/Task.js
let tasks = []; // In-memory array to store tasks

let nextId = 1; // This will simulate auto-incrementing IDs

// Create a task model
class Task {
  constructor(name, description) {
    this.id = nextId++;
    this.name = name;
    this.description = description;
  }
}

// Function to add a new task
function addTask(name, description) {
  const newTask = new Task(name, description);
  tasks.push(newTask);
  return newTask;
}

// Function to get all tasks
function getTasks() {
  return tasks;
}

// Function to get a task by ID
function getTaskById(id) {
  return tasks.find(task => task.id === id);
}

// Function to update a task by ID
function updateTask(id, name, description) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.name = name;
    task.description = description;
    return task;
  }
  return null;
}

// Function to delete a task by ID
function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0]; // Remove and return the deleted task
  }
  return null;
}

module.exports = { addTask, getTasks, getTaskById, updateTask, deleteTask };
