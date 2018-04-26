const User = require('mongoose').model('User');
const passport = require('passport');
//returns a unified error message from a Mongoose error object

var getErrorMessage = (err) => {
    var message = '';
    if (err.code) {
        switch (err.code) { //using error codes
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else { //a Mongoose validation error
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].
                message;
        }
    }
    return message;
};

exports.authenticate = (req, res) => {
    console.log(req.body);

    passport.authenticate('local', (err, user, info) => {
        var token;
        //var user = new User();
        
        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            console.log(user._id);
            token = user.generateJWT();
            res.status(200).json({
                "token": token,
                "userId": user._id
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};

//exports.renderSignup = function (req, res, next) {
//    if (!req.user) {
//        res.render('signup', {
//            title: 'Sign-up Form',
//            messages: req.flash('error')
//        });
//    } else {
//        return res.redirect('/');
//    }
//};

exports.signup = (req, res, next) => { //uses user model to create new //users
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save((err) => {
            if (err) {
                console.log("error...", getErrorMessage(err));
                var message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, (err) => { //req.login is Passport method                
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

//exports.signout = function (req, res) {
//    req.logout(); //invalidate the authenticated session using a Passport method
//    res.redirect('/');
//};


//exports.renderSignin = function (req, res, next) {
//    if (!req.user) {
//        res.render('signin', { title: 'Sign-in Form', messages: req.flash('error') || req.flash('info') });
//    } else {
//        return res.redirect('/');
//    }
//};

//exports.signin = function (req, res, next) {
//    res.redirect("/");
//}

exports.list = (req, res, next) => {
    console.log("Listing users...");

    // List all users with deleted not equal to 1
    User.find({ deleted: { $ne: 1 } }, (err, users) => {
        if (err) {
            return res.status(404).json('An error happened and we cant return the users');
        } else {
            res.status(200).json(users);
        }
    });
}

exports.findOne = (req, res, next) => {
    console.log('Retrieving one user');
    User.findById(req.params.id).exec((err, user) => {
        if (err) {
            return res.status(404).json('An error happened and we cant return the user');
        }

        res.status(200).json(user);
    });
}

exports.create = (req, res, next) => {
    if (!req.user) {
        var user = new User(req.body);

        user.provider = 'local';

        user.save((err) => {
            if (err) {
                return res.json({ error: err });
            } else {
                var token;
                token = user.generateJWT();
                res.status(200);
                res.status(200).json({
                    "token": token
                });
            };

            //if (err) {
            //    return res.send(err);
            //} else {
            //    res.send(data);
            //};

            //req.login(user, (err) =>  { //req.login is Passport method                
            //    if (err) return next(err);
            //    return res.redirect('/');
            //});
        });
    }
}

exports.update = (req, res, next) => {
    // Check for files on the request
    console.log(typeof req.files);
    console.log(req.files);
    if (typeof req.files != 'undefined') req.body.profilePicture = req.files[0].filename;
    console.log(req.files[0].filename);
    console.log(req.body);

    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (!user) {
            return res.status(404).json('message: User not found with the id ' + req.params.id);
        }
        return res.status(200).json(user);
    });
}

exports.delete = (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(400).json(err);
        }
        user.deleted = 1;

        user.save((err, user) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(200).json('image deleted');
        });
    });
}