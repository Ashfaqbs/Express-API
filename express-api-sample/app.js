// Main app file

// app.js

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config');
const messageRoutes = require('./routes/messageRoutes');
const logger = require('./utils/logger');

// Initialize express app
const app = express();

// Middleware setup
app.use(morgan('combined'));  // Logs HTTP requests to console (combined format)
app.use(bodyParser.json());    // Parse incoming JSON data

// Use the message routes defined in messageRoutes.js
app.use('/api', messageRoutes);

// Start the server
app.listen(config.port, () => {
  logger.info(`Server is running on http://localhost:${config.port}`);
});
