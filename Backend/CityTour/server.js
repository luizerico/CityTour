//The process.env.NODE_ENV variable is set to the default 'development‘
//value if it doesn 't exist.
// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the databsee module
var mongoose = require('./config/mongoose');
var passport = require('./config/passport');

// create the database connection
const db = mongoose();

// Load the 'express' module
const configureExpress = require('./config/express');

// Create a new Express application instance
const app = configureExpress();

// Create the passport middleware
const configurePassport = require('./config/passport');

// Use the Express application instance to listen to the '3000' port
app.listen(3030);

// Log the server status to the console
console.log('Server running at http://localhost:3030/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;