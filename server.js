const express = require('express');

// set develop env
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// set route for modules
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// route for webpage
app.get('*', function(req, res) {
    res.render('index');
})

const port = 5000;
app.listen(port);
console.log('Listening on port ' + port + '...' );