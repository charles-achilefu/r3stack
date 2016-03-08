if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
      hook: false,
      ignore: /(\/\.|~$|\.json$)/i
    })) {
    return;
  }
}

const colors = require('colors');
console.log(('\n   Server is running in %s mode.\n'.yellow), process.env.NODE_ENV);

require('babel-register');
require('babel-polyfill');
require('./server');
