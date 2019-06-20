import { push } from 'connected-react-router';

export default ({ dispatch }) => next => action => {
  const { meta } = action;

  next(action);

  if (meta && meta.redirect) {
    dispatch(push(meta.redirect));
  }
};
