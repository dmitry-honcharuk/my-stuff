module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: true,
          },
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
  };
};
