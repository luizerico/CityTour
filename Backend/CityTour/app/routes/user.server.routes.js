module.exports = function (app) {
    var user = require('../controllers/user.server.controller');

    app.route('/signin')
        .get(user.renderSignin)
        .post(user.signin);
    app.route('/signup')
        .get(user.renderSignup)
        .post(user.signup);
    app.get('/signout', user.signout);
}