require('@babel/register')({
  ignore: [/node_modules/],
});

const { DB } = require('@common/config');

module.exports = () => ({
  development: {
    ...DB,
    dialect: 'mysql',
  },
  production: {
    ...DB,
    dialect: 'mysql',
  },
});
