import omit from 'lodash/omit';
import { createReducer } from '@client/utils/state';

import { DIALOG_CLOSE, DIALOG_OPEN } from '../types';

const initialState = {};

const onDialogOpen = (state, { name, data = {} }) => ({
  ...state,
  [name]: data,
});

const onDialogClose = (state, name) => omit(state, name);

export default createReducer(initialState, {
  [DIALOG_OPEN]: onDialogOpen,
  [DIALOG_CLOSE]: onDialogClose,
});
