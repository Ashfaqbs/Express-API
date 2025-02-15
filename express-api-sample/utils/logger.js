// Custom logger (to handle logging)

// utils/logger.js

const winston = require('winston');

// Create a custom logger for structured logging
const logger = winston.createLogger({
  level: 'info',  // Default log level
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [
    // Log to console
    new winston.transports.Console(),
    // Log to a file (logfile.log)
    new winston.transports.File({ filename: 'logs/app.log' })
  ],
});

module.exports = logger;
