const auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

// control of routing
module.exports =function(app){
    app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
        User.find({}).exec(function(err, collection) {
          res.send(collection);
        })
    });

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });
    
    app.post('/login', auth.authenicate );

    // use function form passport module
    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    // route for webpage
    app.get('*', function(req, res) {
        res.render('index',  {
            bootstrappedUser: req.user
        });
    });
}