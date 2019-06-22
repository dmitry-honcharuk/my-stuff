export default ({ spacing, palette }) => ({
  root: {
    padding: spacing(2),
    '&:not(:last-of-type)': {
      marginBottom: 10,
    },
  },
  actions: {
    textAlign: 'right',
    marginTop: spacing(2),
  },
});
