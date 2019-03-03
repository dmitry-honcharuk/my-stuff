export default ({ spacing }) => {
  const doubleSpacing = spacing.unit * 2;

  return {
    signedLabel: {
      paddingTop: spacing.unit,
      paddingBottom: spacing.unit,
      paddingRight: doubleSpacing,
      paddingLeft: doubleSpacing,
    },
    typography: {
      margin: doubleSpacing,
    },
  };
};
