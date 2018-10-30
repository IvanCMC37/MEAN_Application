const passport = require('passport');

exports.authenicate = function(req, res, next) {
    var auth = passport.authenticate('local', function(err, user) {
        if(err) {return next(err);}

        if(!user) {res.send({success: false})}

        // tell passport to create session if successful
        req.logIn( user, function(err) {
            if(err){return next(err);}
            res.send({success: true, user:user});
        })
    })

    // call the auth function now - XHR post
    auth(req, res, next);
}