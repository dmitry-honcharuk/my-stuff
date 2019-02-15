const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './static'),
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
