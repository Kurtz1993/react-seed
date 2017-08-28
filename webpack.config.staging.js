const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'staging';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('staging')
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({
      filename: '[name]-styles.css'
    }),
    new webpack.NoEmitOnErrorsPlugin()
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