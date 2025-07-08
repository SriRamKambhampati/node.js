// app.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.post('/data', (req, res) => {
  res.send(`Received: ${JSON.stringify(req.body)}`);
});

app.listen(4000, () => {
  console.log('API running at http://localhost:4000');
});
