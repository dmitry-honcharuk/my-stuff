import { SIDEBAR_WIDTH } from '../Sidebar/constants';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ palette }) => ({
  root: {
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
  },
  title: {
    color: fade(palette.common.white, 0.7),
  },
});
