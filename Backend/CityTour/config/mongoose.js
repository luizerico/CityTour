var config = require('./config');
var mongoose = require('mongoose');

module.exports = () => {
    var db = mongoose.connect(config.db);
    require('../app/models/picture.server.model');
    require('../app/models/user.server.model');
    return db;
}
