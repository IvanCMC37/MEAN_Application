const auth = require('./auth'),
    users = require('../controllers/users'),
    courses = require('../controllers/courses'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

// control of routing
module.exports =function(app){
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers );
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);
    
    app.get('/api/courses', courses.getCourses);
    app.get('/api/courses/:id', courses.getCourseById);

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });
    
    app.post('/login', auth.authenicate );

    // use function form passport module
    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    // route for webpage
    app.get('*', function(req, res) {
        res.render('index',  {
            bootstrappedUser: req.user
        });
    });
}