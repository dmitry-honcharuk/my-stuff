import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ palette, spacing }) => ({
  menu: {
    fontSize: 15,
  },
  icon: {
    color: palette.primary.contrastText,
    fontSize: 20,
    marginRight: spacing(1),
    minWidth: 0,
  },
  divider: {
    backgroundColor: fade(palette.common.white, 0.5),
  },
  listItem: {
    padding: 0,
  },
  link: {
    display: 'flex',
    padding: `${spacing(1)}px ${spacing(2)}px`,
  },
});
