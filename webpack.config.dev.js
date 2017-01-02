'use strict';

const path = require('path');
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    modules: [
      '.js',
      '.jsx',
      '.json',
      path.resolve(__dirname, 'node_modules')
    ]
  },
  context: path.join(__dirname, "assets"),
  entry: {
    app: "./js/app.js",
    vendors: ["moment", "./js/shared"]
  },
  output: {
    path: path.join(__dirname, "wwwroot"),
    filename: "/js/[name].js",
  },
  plugins: [
    new ExtractTextPlugin("./css/app.css"),
    new CommonsChunkPlugin({
      names: ["vendors", "manifest"]
    }),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
      //     'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(["css-loader?sourceMap", "sass-loader?sourceMap"])
      }
    ],
  },
};
