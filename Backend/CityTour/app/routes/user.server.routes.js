const users = require('../controllers/user.server.controller');
const passport = require('passport');
const jwt = require('express-jwt');
const config = require('../../config/config');

module.exports = function (app) {   

    //app.route('/signin')
    //    .get(users.renderSignin)
    //    .post(passport.authenticate('local', {
    //        successRedirect: '/',
    //        failureRedirect: '/signin',
    //        failureFlash: true
    //    }));

    //app.route('/signup')
    //    .get(users.renderSignup)
    //    .post(users.signup);

    //app.get('/signout', users.signout);

    // Api Routes for the pictures model
    app.route('/api/v1/authenticate')
        .post(users.authenticate);

    app.route('/api/v1/accounts')
        .get(jwt({ secret: config.secretJWT }), users.list)
        .post(users.create);
    app.route('/api/v1/accounts/:id')
        .get(jwt({ secret: config.secretJWT }), users.findOne)
        .put(jwt({ secret: config.secretJWT }), users.update)
        .delete(jwt({ secret: config.secretJWT }), users.delete);
}