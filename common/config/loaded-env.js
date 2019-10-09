const path = require('path');
const { load } = require('dotenv-extended');

module.exports = load({
  errorOnMissing: true,
  path: path.resolve(__dirname, '../../.env'),
});
