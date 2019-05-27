import { SIDEBAR_WIDTH as WIDTH } from './constants';

export default ({ palette: { common, primary } }) => ({
  container: {
    height: '100vh',
    width: WIDTH,
    backgroundColor: primary.main,
    color: primary.contrastText,
    position: 'fixed',
  },
  bar: {
    backgroundColor: primary.light,
  },
});
