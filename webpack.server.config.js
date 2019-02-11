const path = require('path');
const nodeExternals = require('webpack-node-externals');
const RemoveWebpackPlugin = require('remove-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  externals: [nodeExternals()],
  watch: true,
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /server/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
  plugins: [
    new RemoveWebpackPlugin('./src/'),
    new NodemonPlugin(),
  ],
  node: {
    console: false,
    process: false,
    __filename: false,
    __dirname: false,
  }
};
