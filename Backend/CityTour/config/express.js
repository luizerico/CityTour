const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');

module.exports = function () {

    // create the express instance
    const app = express();

    // Set the middleware morgan for debuggint in dev and compress for prod
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compress());
    }

    // Set body-parser and method-override middleware
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Set the session configuration for express
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // SEt the view
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    // Configure the flash messages middleware
    app.use(flash());
    app.use(passport.initialize()); //bootstrapping the Passport module
    app.use(passport.session());    //keep track of your user's session

    // Load the route files
    require('../app/routes/user.server.routes')(app);
    require('../app/routes/picture.server.routes')(app);
    // require('../app/routes/index.server.routes')(app);


    // Set the folder for uploaded images
    app.use(express.static('./uploads'))
    // Configure static folder
    app.use(express.static('./public'));
    // Set Bootstrap
    app.use(express.static('./node_modules/bootstrap/dist'));


    // Catch all other routes and return the index file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


    return app;
}