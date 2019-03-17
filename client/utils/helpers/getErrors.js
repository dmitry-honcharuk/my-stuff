import mapValues from 'lodash/mapValues';

export default ({ error, errors }) => ({
  ...(error && { _error: error }),
  ...mapValues(errors, e => e.msg || e),
});
