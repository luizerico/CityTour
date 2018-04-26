const users = require('../controllers/user.server.controller');
const passport = require('passport');
const jwt = require('express-jwt');
const multer = require('multer');
const config = require('../../config/config');

module.exports = function (app) {   

    // Set multer middleware to save the file    
    var storage = multer.diskStorage({
        filename: function (req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname)
        },
        destination: function (req, file, cb) {
            cb(null, __dirname + '../../../uploads/uploads/')
        },
    })
    var uploading = multer({
        // dest: __dirname + '../../../uploads/uploads',
        storage: storage,
        limits: {
            fileSize: 10000000
        },
        fileFilter: function (req, file, cb) {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                console.log(file.mimetype);
                return cb(null, true);
            }
            console.log('Invalid mimetype...')
            return cb(null, false, new Error('I don\'t have a clue!'));
        }
    });

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
        .put(jwt({ secret: config.secretJWT }), uploading.any(), users.update)
        .delete(jwt({ secret: config.secretJWT }), users.delete);
}