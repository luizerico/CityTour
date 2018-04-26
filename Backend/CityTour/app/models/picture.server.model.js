var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PictureSchema = new Schema({
    name: String,
    path: String,
    description: String,
    location: String,
    lat: String,
    lng: String,

    created: Date,
    updated: { type: Date, default: Date.now },
    userOwner: { type: Schema.ObjectId, ref: 'User' },

    // prototype features
    aiDescription: String,
    status: Number,
    deleted: { type: Number, default: 0}
});

// use schema to define the User model
mongoose.model('Picture', PictureSchema);