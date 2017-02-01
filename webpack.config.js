const webpack = require('webpack');
const path = require('path');

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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  devServer: {
    contentBase: __dirname,
    port: process.env.PORT
  },
};


module.exports = config;
