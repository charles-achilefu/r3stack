if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
      hook: false,
      ignore: /(\/\.|~$|\.json$)/i
    })) {
    return;
  }
}

console.log(('\n   Server is running in %s mode.\n'), process.env.NODE_ENV);

require('babel-register');
require('babel-polyfill');
require('./server');
