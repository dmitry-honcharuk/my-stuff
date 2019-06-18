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
  },
});
