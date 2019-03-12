export default ({ spacing: { unit } }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  form: {
    width: '80%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: -20,
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
