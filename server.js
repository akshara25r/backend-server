// // Import the Express library to create and manage the web server
// const express = require('express');

// // Initialize an Express application instance
// const app = express();

// // Define the port on which the server will listen
// // Use the PORT environment variable if available, otherwise default to 3000
// const PORT = process.env.PORT || 3000;

// // Define a GET route for the root URL ('/')
// // When a client sends a GET request to the root, send a response with the text message
// app.get('/', (req, res) => {
//     res.send('Hello, Kalvians! Your backend server is live!');
// });

// // Start the server and make it listen for incoming requests on the specified port
// app.listen(PORT, () => {
//     // Log a message to the console indicating that the server is running
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests

// GET request at /api
app.get('/api', (req, res) => {
    res.json({ message: "Welcome to our API!" });
});

// POST request at /api/data
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Hello ${name}, you are ${age} years old!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

