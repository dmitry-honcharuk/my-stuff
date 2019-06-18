import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router';

export default compose(
  withRouter,
  withProps(props => {
    const {
      match: { params },
    } = props;

    return params;
  }),
);
