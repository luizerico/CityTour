var Picture = require('mongoose').model('Picture');

exports.list = (req, res, next) => {
    console.log("Listing pictures...");

    Picture.find({ deleted: { $ne : 1 }}, (err, pictures) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(pictures);
        }
    });
}

exports.findOne = function (req, res, next) {
    console.log('Retrieving one image: ', req.params.id);
    Picture.findById(req.params.id).exec((err, picture) => {
        if (err) {
            return res.status(404).json('An error happened and we cant return the picture');
        }

        res.status(200).json(picture);
    });
}

exports.create = function (req, res, next) {
    if (!req.picture) {
        var picture = new Picture(req.body);
    } 

    picture.save((err) => {
        if (err) {
            res.status(404).json('Cant save the image')
        }

        res.status(200).json('Picture saved');
    });
}

exports.insert = function (req, res, next) {
    console.log("Saving a picture...");
    console.log(req.body);

    console.log(req.files);  

    // Iteract through the array of files using map
    // And save each image as a register on the database
    req.files.map((file) => {
         // Declare a Picture variable 
        let picture = new Picture();
        picture.path= file.destination;
        picture.name= file.filename;
        picture.description= req.body.description;
        picture.userOwner = req.body.userOwner;
        picture.location = req.body.location;

        picture.save(function (err) {
            console.log('Saving: ', picture);
            if (err) {
                return next(err);
            }
        });

    });
}

exports.delete = function (req, res, next) {
    Picture.findById(req.params.id, (err, picture) => {
        if (err) {
            return res.status(400).json(err);
        }
        picture.deleted = 1;

        picture.save((err, picture) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(200).json('image deleted');
        });
    });
}

exports.update = function (req, res, next) {
    console.log('updating...')
    console.log(req.body);
    Picture.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, picture) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (!picture) {
            return res.status(404).json('message: Picture not found with the id ' + req.params.id);
        }
        return res.status(200).json(picture);
    });
}