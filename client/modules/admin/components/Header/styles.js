import { SIDEBAR_WIDTH } from '../Sidebar/constants';

export default () => ({
  root: {
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
