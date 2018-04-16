// Picture routes

module.exports = function (app) {
    var picture = require('../controllers/picture.server.controller');

    // Set multer middleware to save the file
    var multer = require('multer');
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
        .get(picture.list)
        .post(uploading.any(), picture.insert);
    app.route('/api/v1/pictures/:id')
        .get(picture.findOne)
        .put(picture.update)
        .delete(picture.delete);
    app.route('/api/v1/pictures/delete/:id')
        .put(picture.update);
}