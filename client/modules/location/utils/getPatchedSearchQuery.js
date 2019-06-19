import { parse, stringify } from 'query-string';

const getPatchedSearchQuery = (searchPatch = {}) => {
  const query = parse(location.search);

  return stringify({
    ...query,
    ...searchPatch,
  });
};

export default getPatchedSearchQuery;
