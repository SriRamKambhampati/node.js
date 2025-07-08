// todo.js
const express = require('express');
const app = express();
let todos = [];

app.use(express.json());

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), task: req.body.task };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.listen(5000, () => console.log('Todo app on http://localhost:5000'));
