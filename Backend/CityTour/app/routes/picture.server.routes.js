const picture = require('../controllers/picture.server.controller');
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


    // Api Routes for the pictures model
    app.route('/api/v1/pictures')
        .get(jwt({ secret: config.secretJWT }), picture.list)
        .post(jwt({ secret: config.secretJWT }), uploading.any(), picture.insert);
    app.route('/api/v1/pictures/:id')
        .get(jwt({ secret: config.secretJWT }), picture.findOne)
        .put(jwt({ secret: config.secretJWT }), picture.update)
        .delete(jwt({ secret: config.secretJWT }), picture.delete);
    app.route('/api/v1/pictures/delete/:id')
        .put(jwt({ secret: config.secretJWT }), picture.update);
}