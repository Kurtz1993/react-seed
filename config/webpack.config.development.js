const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

const cwd = process.cwd();

console.log('Running in port 4000');

module.exports = webpackMerge(commonConfig, {
  devServer: {
    contentBase: path.resolve(cwd, 'app'),
    compress: true,
    inline: true,
    hot: true,
    port: 4000,
    publicPath: '/',
    quiet: true,
    historyApiFallback: true,
    stats: {
      chunks: false,
      chunkModules: false
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});