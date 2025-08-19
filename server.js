require('dotenv').config();
const express = require('express');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('Hunter Forum server is running 🚀');
});

// Use Render’s PORT or default to 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
