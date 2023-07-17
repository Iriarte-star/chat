

const express = require('express');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 8000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
