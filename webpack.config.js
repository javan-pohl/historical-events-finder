const path = require('path');
const webpack = require('webpack');




const HtmlWebpackPlugin = require('html-webpack-plugin')




/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
  mode: 'development',
  entry: './client/components/index.js',

  output: {
    path: path.resolve(__dirname, 'public')
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
            template: 'index.html'
          })],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'client/components')],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}