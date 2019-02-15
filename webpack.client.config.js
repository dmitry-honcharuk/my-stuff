const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

require('./loaded-env');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  devtool: 'eval',
  devServer: {
    overlay: true,
    port: process.env.WDS_PORT,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public'),
    clientLogLevel: 'info',
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'index.js',
    chunkFilename: '[name].chunk.js',
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
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: './public/favicon.ico',
      inject: true,
      title: 'My stuff',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
};
