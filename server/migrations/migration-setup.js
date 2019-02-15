require('@babel/register')({
  ignore: [/node_modules/],
});

const { DB } = require('../config');

module.exports = () => ({
  development: {
    ...DB,
    dialect: 'mysql',
  },
});
