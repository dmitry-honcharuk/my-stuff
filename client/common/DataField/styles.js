import grey from '@material-ui/core/colors/grey';

export default ({ palette }) => ({
  root: {
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: palette.primary.main,
    fontSize: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    textTransform: 'capitalize',
    cursor: 'pointer',
  },
  errorMessage: {
    fontSize: 13,
  },
  errorColor: {
    color: palette.error.light,
  },
  value: {},
  field: {
    marginTop: 0,
    marginBottom: 0,
  },
  disabledField: {
    color: grey[700],
    backgroundColor: grey[50],
  },
});
