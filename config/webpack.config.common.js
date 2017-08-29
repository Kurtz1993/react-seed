const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const server = require('webpack-dev-server');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const cwd = process.cwd();

module.exports = {
  cache: true,
  context: cwd,
  performance: {
    hints: false
  },
  entry: {
    app: [
      path.resolve(cwd, 'app/index.jsx')
    ]
  },
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: path.resolve(cwd, 'dist'),
    publicPath: '/dist/',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(process.cwd(), 'app'),
        loader: 'babel-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader?name=images/[hash].[ext]&limit=500'
      },
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
  },
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty'
  },
  plugins: [
    new ProgressBarPlugin({
      format: chalk.magenta.bold('Building') + ' [' + chalk.green(':bar') + '] ' + chalk.green.bold(':percent') + ' ' + chalk.yellow.bold(':elapsed seconds') + ' ' + chalk.white(':msg'),
      clear: false
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};