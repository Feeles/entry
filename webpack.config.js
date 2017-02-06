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
    new webpack.DefinePlugin({
      CORE_VERSION: JSON.stringify('beta-3'),
      CORE_CDN_URL: JSON.stringify('https://embed.hackforplay.xyz/open-source/core/h4p-beta-3.js'),
    }),
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
