const mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports =function(config){
    // connect to mongodb
    mongoose.connect(config.db, { useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanApplication db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch) {
          return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);
    
    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'ivan');
            User.create({firstName:'Ivan',lastName:'Chan',username:'ivan', salt: salt, hashed_pwd: hash, roles: ['admin']});
            salt = createSalt();
            hash = hashPwd(salt, 'holy');
            User.create({firstName:'Holy',lastName:'Molly',username:'holy', salt: salt, hashed_pwd: hash, roles: []});
            salt = createSalt();
            hash = hashPwd(salt, 'dan');
            User.create({firstName:'Dan',lastName:'Wahlin',username:'dan', salt: salt, hashed_pwd: hash});
        }
    })   
}

// Ask crypo module to give random bytes
function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

// create hash password
function hashPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}