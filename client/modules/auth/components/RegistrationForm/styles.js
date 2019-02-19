export default ({ spacing: { unit }, breakpoints }) => ({
  container: {
    width: '90%',
    [breakpoints.up('sm')]: {
      width: '60%',
    },
    [breakpoints.up('md')]: {
      width: '40%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    marginTop: unit,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    transition: 'width 0.2s ease-out',
    width: 96,
  },
  inProgressButton: {
    width: 126,
  },
  loadingIcon: {
    marginRight: 10,
  },
});
