// Import the express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the port the app will listen on
const PORT = 3000; // we can choose any port number you want

// Define a GET route for /api/message
// When a GET request is made to /api/message, it will respond with a message
app.get('/api/message', (req, res) => {
  // Send a JSON response with a message
  res.json({ message: 'Hello, this is your API message!' });
});

// req
// http://localhost:3000/api/message
// resp
// {
// "message": "Hello, this is your API message!"
// }

// Make the app listen on the specified port and log a message when it starts
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
