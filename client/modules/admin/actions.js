const MODULE = 'ADMIN/USERS';

export const NEW_USER_PREVIEW_UPDATE = `${MODULE}/NEW_USER_PREVIEW_UPDATE`;
export const newUserPreviewUpdate = (field, value) => ({
  type: NEW_USER_PREVIEW_UPDATE,
  payload: {
    field,
    value,
  },
});
