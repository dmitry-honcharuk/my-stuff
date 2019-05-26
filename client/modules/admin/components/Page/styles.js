import { SIDEBAR_WIDTH } from '../Sidebar/constants';

export default ({ spacing, mixins }) => ({
  page: {
    display: 'flex',
  },
  content: {
    marginTop: spacing(8),
    paddingTop: spacing(2),
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    ...mixins.gutters(),
  },
  actions: {
    float: 'right',
  },
});
