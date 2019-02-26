import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ palette }) => ({
  adminLabel: {
    color: fade(palette.common.white, 0.7),
  },
});
