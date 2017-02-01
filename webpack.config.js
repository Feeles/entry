const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: 'entry.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [

  ],
  devServer: {
    contentBase: __dirname,
    port: process.env.PORT
  },
};

if (process.env.NODE_ENV === 'production') {

  config.plugins.push(
    new UglifyJSPlugin()
  );

}

module.exports = config;
