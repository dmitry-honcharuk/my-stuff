import grey from '@material-ui/core/colors/grey';

export default ({ palette }) => ({
  root: {
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    color: palette.primary.main,
    textTransform: 'capitalize',
    cursor: 'pointer',
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
