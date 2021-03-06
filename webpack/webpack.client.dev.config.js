const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('../common/config/loaded-env');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../client/app/index.js')],
  devtool: 'eval',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    public: `http://localhost:${process.env.PORT}`,
    overlay: true,
    port: process.env.WDS_PORT,
    historyApiFallback: true,
    clientLogLevel: 'info',
    publicPath: '/',
  },
  output: {
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
