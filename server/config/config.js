const path = require('path');
const rootPath =path.normalize(__dirname +'/../../');

module.exports = {
    development: {
      db: 'mongodb://localhost/meanapplication',
      rootPath: rootPath,
      port: process.env.PORT || 5000
    },
    production: {
      rootPath: rootPath,
      db: 'mongodb://kskks:jcu1s23@18.218.105.153:27017/meanapplication',
      port: process.env.PORT || 3000
    }
  }