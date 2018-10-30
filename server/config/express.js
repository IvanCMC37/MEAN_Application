// move configuration code from server.js to hereand export back to server.js
const express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
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

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({secret: 'multi vision unicorns',resave:false,saveUninitialized:false}));
    app.use(passport.initialize());
    app.use(passport.session());

    // configure the stylus middleware
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public'));
}

