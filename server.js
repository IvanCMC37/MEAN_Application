const express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// set develop env
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// function to get used by middleware
function compile (str, path) {
    return stylus(str).set('filename', path);
}

// set route for modules
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// import logger
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure the stylus middleware
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

// connect to mongodb
if(env ==='development') {
    mongoose.connect('mongodb://localhost/meanapplication', { useNewUrlParser: true});
} else {
    mongoose.connect('mongodb://kskks:jcu1s23@18.218.105.153:27017/meanapplication', { useNewUrlParser: true});
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('meanapplication db opened');
});

// // create schema for db
// const messageSchema = mongoose.Schema({message: String});

// // create model base on schema
// var Message = mongoose.model('Message', messageSchema);

// // pull data out of db
// var mongoMessage;
// Message.findOne().exec(function(err, messageDoc) {
//     mongoMessage = messageDoc.message;
// });

app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
});

// route for webpage
app.get('*', function(req, res) {
    res.render('index');
});

const port = 5000;
app.listen(port);
console.log('Listening on port ' + port + '...' );