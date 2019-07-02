import { DIALOG_CLOSE, DIALOG_OPEN } from './types';

export const dialogOpened = (name, data) => ({
  type: DIALOG_OPEN,
  payload: {
    name,
    data,
  },
});

export const dialogClosed = name => ({
  type: DIALOG_CLOSE,
  payload: name,
});
