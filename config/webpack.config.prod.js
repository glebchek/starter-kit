// Tools
const { merge } = require('webpack-merge');

// Local
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
});
