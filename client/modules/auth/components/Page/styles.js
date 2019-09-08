export default ({ spacing, breakpoints }) => ({
  wrapper: {
    height: '100vh',
    padding: spacing(5),
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
