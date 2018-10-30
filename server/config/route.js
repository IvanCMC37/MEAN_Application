const auth = require('./auth');

// controll of routing
module.exports =function(app){
    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });
    
    app.post('/login', auth.authenicate );

    // route for webpage
    app.get('*', function(req, res) {
        res.render('index');
    });
}