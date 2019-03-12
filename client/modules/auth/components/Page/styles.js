export default ({ spacing: { unit }, breakpoints }) => ({
  wrapper: {
    height: '100vh',
    padding: unit * 5,
  },
  content: {
    display: 'flex',
    height: '100%',
  },
  left: {
    flexBasis: '40%',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  right: {
    flexGrow: 1,
  },
});
