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
            cb(null, __dirname + '../../../public/uploads/')
        },
    })
    var uploading = multer({
        // dest: __dirname + '../../../public/uploads/',
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

    app.get('/', picture.render);
    app.get('/list', picture.list);
    app.get('/create', picture.create);
    app.post('/create', uploading.any(), picture.insert);
}