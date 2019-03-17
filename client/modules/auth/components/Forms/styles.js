import { darken } from '@material-ui/core/styles/colorManipulator';

export default ({ spacing: { unit }, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
  },
  form: {
    width: '80%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'center',
  },
  linkWrapper: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    fontWeight: 100,
  },
  link: {
    marginLeft: 5,
    color: darken(palette.primary.main, 0.4),
    fontWeight: 'normal',
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
  errorWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  error: {
    position: 'absolute',
    top: 10,
    color: palette.error.main,
  },
});
