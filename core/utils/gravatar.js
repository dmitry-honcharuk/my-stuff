import pipe from 'lodash/fp/pipe';

import { GRAVATAR } from '@core/constants';

import { removeDebugSubstring } from './emails';
import { hashString, withPrefix } from './strings';
import { addQueryParams } from './urls';

export const createGetGravatarLink = queryOptions =>
  pipe(
    removeDebugSubstring,
    hashString,
    withPrefix(`${GRAVATAR.AVATAR_BASE}/`),
    addQueryParams(queryOptions),
  );
