﻿var path = require('path');

module.exports = function (app) {

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('public/index.html'));
        // res.sendFile('public/index.html'); 
    });
}


