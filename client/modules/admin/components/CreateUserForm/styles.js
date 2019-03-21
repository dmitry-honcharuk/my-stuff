export default ({ spacing }) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
  },
  field: {
    '&:not(:last-of-type)': {
      marginBottom: 2 * spacing.unit,
    },
  },
});
