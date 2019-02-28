import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ palette, spacing }) => ({
  menu: {
    fontSize: 15,
  },
  icon: {
    color: palette.primary.contrastText,
    fontSize: 20,
    marginRight: spacing.unit,
  },
  divider: {
    backgroundColor: fade(palette.common.white, 0.5),
  },
});
