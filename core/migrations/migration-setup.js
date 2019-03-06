require('@babel/register')({
  ignore: [/node_modules/],
});

const { DB } = require('@core/config');

module.exports = () => ({
  development: {
    ...DB,
    dialect: 'mysql',
  },
});
