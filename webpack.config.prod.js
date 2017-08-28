const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({
      filename: '[name]-styles.css'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer];
                }
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer];
                }
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
});