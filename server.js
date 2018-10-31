const express = require('express');

// set develop env
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const app = express();

//create config object from importing config.js
const config = require('./server/config/config')[env];

//imports from config floder
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/route')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...' );
