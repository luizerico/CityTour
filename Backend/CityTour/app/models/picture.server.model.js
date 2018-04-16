var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PictureSchema = new Schema({
    name: String,
    path: String,
    description: String,
    location: String,
    lattitude: String,
    longitude: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },

    userOwner: {
        type: Schema.ObjectId, ref: 'User'
    },

    // prototype features
    aiDescription: String,
    status: Number,
    deleted: { type: Number, default: 0}
});

// use schema to define the User model
mongoose.model('Picture', PictureSchema);