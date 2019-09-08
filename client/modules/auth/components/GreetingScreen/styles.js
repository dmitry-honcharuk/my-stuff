import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ spacing, palette, mixins }) => ({
  wrapper: {
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingContent: {
    ...mixins.gutters(),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    width: '100%',
    backgroundColor: fade(palette.background.paper, 0.5),
  },
  dark: {
    backgroundColor: fade(palette.common.black, 0.65),
    color: fade(palette.common.white, 0.65),
  },
});
