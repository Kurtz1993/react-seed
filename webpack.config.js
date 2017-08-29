if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config/webpack.config.prod');
} else {
  module.exports = require('./config/webpack.config.dev');
}