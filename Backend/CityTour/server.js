//The process.env.NODE_ENV variable is set to the default 'development‘
//value if it doesn 't exist.
// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the databsee module
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

// create the database connection
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

// Create the passport middleware
const passport = configurePassport();

// Use the Express application instance to listen to the '3000' port
app.listen(3030);

// Log the server status to the console
console.log('Server running at http://localhost:3030/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;