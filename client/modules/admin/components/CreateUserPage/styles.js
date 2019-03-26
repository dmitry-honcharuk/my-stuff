export default ({ spacing }) => ({
  wrapper: {
    display: 'flex',
  },
  source: {
    maxWidth: 400,
    flexGrow: 1,
  },
  output: {
    flexGrow: 1,
    maxWidth: '75%',
    paddingLeft: 2 * spacing.unit,
    paddingRight: 2 * spacing.unit,
    marginLeft: 2 * spacing.unit,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    '&:not(:last-of-type)': {
      marginBottom: 2 * spacing.unit,
    },
  },
  card: {},
});
