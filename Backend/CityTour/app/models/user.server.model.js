// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const config = require('../../config/config');

// Define a new 'UserSchema'
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        // Validate the email format
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    dateOfBirth: Date,
    username: {
        type: String,
        // Set a unique 'username' index
        unique: true,
        // Validate 'username' value existance
        required: 'Username is required',
        // Trim the 'username' field
        trim: true
    },
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },

    profilePicture: String,
    salt: {
        type: String
    },
    provider: {
        type: String,
        // Validate 'provider' value existance
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: Date,
    updated: { type: Date, default: Date.now },
    canPublish: { type: Boolean,  default: true  },
    deleted: { type: Number, default: 0 },
    status: {  type: Number, default: 0 }
});

// Set the 'fullname' virtual property
UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
UserSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function (password) {
    //console.log(crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex'))
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');

};

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Find possible not used username
UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
    // Add a 'username' suffix
    const possibleUsername = username + (suffix || '');

    // Use the 'User' model 'findOne' method to find an available unique username
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        // If an error occurs call the callback with a null value, otherwise find find an available unique username
        if (!err) {
            // If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Generates the token for the web authentication. The userID is stored inside the token
// and can be recovered to be used in the authorization code.
// *** The expiration data need to be verified and a refresh function implemented.
UserSchema.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        data: this.username,
    }, config.secretJWT, { expiresIn: '2h' });
}

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);