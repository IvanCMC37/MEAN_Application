const express = require('express'),
        passport = require('passport'),
        mongoose = require('mongoose'),
        LocalStrategy = require('passport-local').Strategy;

// set develop env
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

//create config object from importing config.js
const config = require('./server/config/config')[env];

//imports from config floder
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);

// server-side of login
const User = mongoose.model('User');
passport.use(new LocalStrategy(
    // done is callback
    function(username, password, done) {
      User.findOne({username:username}).exec(function(err, user) {
        if(user&& user.authenticate(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    }
));

// tell passport how to do serializations
passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}).exec(function(err, user) {
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
});

require('./server/config/route')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...' );