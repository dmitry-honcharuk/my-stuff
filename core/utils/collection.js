import pipe from 'lodash/fp/pipe';
import _map from 'lodash/fp/map';
import _uniq from 'lodash/fp/uniq';

export const getUniqueFields = fieldName =>
  pipe(
    _map(fieldName),
    _uniq,
  );
