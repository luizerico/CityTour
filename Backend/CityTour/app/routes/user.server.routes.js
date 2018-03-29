const users = require('../controllers/user.server.controller');
const passport = require('passport');

module.exports = function (app) {   

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.get('/signout', users.signout);
}