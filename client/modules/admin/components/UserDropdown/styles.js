export default ({ spacing }) => {
  const doubleSpacing = spacing(2);

  return {
    signedLabel: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      paddingRight: doubleSpacing,
      paddingLeft: doubleSpacing,
    },
    typography: {
      margin: doubleSpacing,
    },
  };
};
