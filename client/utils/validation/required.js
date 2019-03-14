export default fieldName => value => {
  if (!value) {
    return `${fieldName} is required field`;
  }
};
