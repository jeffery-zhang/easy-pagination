const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.min.js',
  },
  devtool: '#source-map',
  plugins: [
    new UglifyjsPlugin({
      exclude: /(node_modules)/,
      sourceMap: true,
      parallel: true
    }),
    new ExtractTextPlugin('easy-pagination.min.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                import: true,
              },
            },
          ],
        }),
      },
    ],
  },
};
