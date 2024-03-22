const express = require('express');
const cacau = require('./cacau');


const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacau.getAllChocolates(
  );
  res.status(200).json({ chocolates });
});

module.exports = app;