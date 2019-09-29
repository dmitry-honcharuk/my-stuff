const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('../common/config/loaded-env');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../client/app/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    pathinfo: true,
    filename: 'static/index.js',
    chunkFilename: 'static/[name].chunk.js',
    publicPath: '/',
  },
  stats: 'minimal',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
    },
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /client/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
  plugins: [
    new RemoveWebpackPlugin(path.resolve(__dirname, '../dist')),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist/static'),
        toType: 'dir',
      },
    ]),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
      title: 'My stuff',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
};
