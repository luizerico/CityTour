var Picture = require('mongoose').model('Picture');


exports.render = function (req, res) {
    res.render(
        'index', {
            'title': 'CityTour'
        });
}

exports.list = function (req, res, next) {
    console.log("Listing pictures...");

    Picture.find({}, function (err, pictures) {
        if (err) {
            return next(err);
        } else {
            res.render('picture_list', { pictures: pictures });
            //res.json(pictures);
        }
    });
}

exports.view = function (req, res, next) {

}

exports.create = function (req, res, next) {
    res.render('picture_create', {});
}

exports.insert = function (req, res, next) {
    console.log("Saving a picture...");
    console.log(req.body);

    // console.log(req.files);  
    

    // Iteract through the array of files using map
    // And save each image as a register on the database
    req.files.map((file) => {
         // Declare a Picture variable 
        let picture = new Picture();
        picture.path= file.destination;
        picture.name= file.filename;
        picture.description= req.body.description;
        picture.userOwner= "L-uiz2";

        picture.save(function (err) {
            console.log('Saving: ', picture);
            if (err) {
                return next(err);
            }
        });

    });

    res.redirect("/list");
}

exports.delete = function (req, res, next) {

}

exports.update = function (req, res, next) {

}