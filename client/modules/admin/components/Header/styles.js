import { SIDEBAR_WIDTH } from '../Sidebar/constants';

export default () => ({
  root: {
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
  },
});
