const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

process.env.NODE_ENV = 'production';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin()
  ]
});