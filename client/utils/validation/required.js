const required = fieldName => value => {
  if (!value) {
    return `${fieldName} is required field`;
  }
};

export const requiredEmail = required('Email');
export const requiredPassword = required('Password');
export const requiredPasswordConfirm = required('Password confirmation');

export default required;
