// Backend Server for Umuzi Bootcamp
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.json({ message: "Backend is running! Welcome to my API" });
});

// Example API Route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "Phaasham", role: "Full Stack Developer" },
    { id: 2, name: "Umuzi Student", role: "Bootcamp" }
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
