// move configuration code from server.js to hereand export back to server.js
const express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function(app, config){
    // function to get used by middleware
    function compile (str, path) {
        return stylus(str).set('filename', path);
    }

    // set route for modules
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    // import logger
    app.use(logger('dev'));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // configure the stylus middleware
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public'));
}

