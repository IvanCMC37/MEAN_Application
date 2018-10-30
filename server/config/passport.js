const passport = require('passport'),
  mongoose = require('mongoose'),
  LocalStrategy = require('passport-local').Strategy,
  User = mongoose.model('User');

module.exports = function(){
    // server-side of login
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
}