const Picture = require('mongoose').model('Picture');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');

exports.listAll = (req, res, next) => {
    console.log("Listing pictures...");
    Picture
        .find({})
        .populate('userOwner')
        .exec((err, pictures) => {

            if (err) {
                return next(err);
            } else {
                res.status(200).json(pictures);
            }
        });
}

exports.list = (req, res, next) => {
    console.log("Listing pictures...");
    req.params.searchable == 'undefined' ? searchword = '' : searchword = req.params.searchable;
    let regularExpression = new RegExp('.*' + searchword + '.*');

    Picture
        .find({
            $or: [
                { description: { $regex: regularExpression, $options: 'i' } },
                { location: { $regex: regularExpression, $options: 'i' } }
            ]
        })
        .where({ deleted: { $ne: 1 } })
        .where({ status: { $ne: 1 } })
        .populate('userOwner')
        .exec((err, pictures) => {

            if (err) {
                return next(err);
            } else {
                res.status(200).json(pictures);
            }
        });
}

exports.findOne = (req, res, next) => {
    console.log('Retrieving one image: ', req.params.id);
    Picture.findById(req.params.id).exec((err, picture) => {
        if (err) {
            return res.status(404).json('An error happened and we cant return the picture');
        }
        console.log('picture',picture);
        res.status(200).json(picture);
    });
}

exports.create = (req, res, next) => {
    if (!req.picture) {
        var picture = new Picture(req.body);
    } 

    console.log(req.picture);

    picture.save((err) => {
        if (err) {
            res.status(404).json('Cant save the image')
        }

        res.status(200).json('Picture saved');
    });
}

exports.insert = (req, res, next) => {
    console.log("Saving a picture...");
    console.log(req.body);

    console.log(req.user);  

    // Iteract through the array of files using map
    // And save each image as a register on the database
    req.files.map((file) => {
         // Declare a Picture variable 
        let picture = new Picture();
        picture.path= file.destination;
        picture.name= file.filename;
        picture.description = req.body.description;

        // Get the user Id stored inside the token
        picture.userOwner = jwt.verify(req.headers.authorization.replace('Bearer ', ''), config.secretJWT);
        picture.location = req.body.location;
        picture.lat = req.body.lat;
        picture.lng = req.body.lng;

        picture.save((err) => {
            console.log('Saving: ', picture);
            if (err) {
                return next(err);
            }
        });

    });
}

exports.delete = (req, res, next) => {
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

exports.update = (req, res, next) => {
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

//The hasAuthorization() middleware uses the req.course and req.user objects
//to verify that the current user is the creator of the current course
exports.hasAuthorization = function (req, res, next) {
    if (req.picture.userOwner.id !== req.user.id) {
        return res.status(403).json({
            message: 'Account is not authorized'
        });
    }
    next();
};