const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(Math.pow(5, 10).toString());
});

app.listen(3003, '0.0.0.0', () => {
  console.log('Express server listening on https://localhost:3003');
});