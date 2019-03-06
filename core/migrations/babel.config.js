module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    extends: '../../babel.config.js',
  };
};
