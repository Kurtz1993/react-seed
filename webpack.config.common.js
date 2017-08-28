const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(process.cwd(), 'app/index.jsx'),
  target: 'web',
  output: {
    path: path.resolve(process.cwd(), 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name]-bundle.js',
    devtoolModuleFilenameTemplate: '../../[resource-path]'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
      }
    ]
  }
};