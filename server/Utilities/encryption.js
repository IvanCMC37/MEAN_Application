var crypto = require('crypto');

// Ask crypo module to give random bytes
exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
}

// create hash password
exports.hashPwd = function(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}