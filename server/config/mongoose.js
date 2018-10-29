mongoose = require('mongoose');

module.exports =function(config){
    // connect to mongodb
    mongoose.connect(config.db, { useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanApplication db opened');
    });
}