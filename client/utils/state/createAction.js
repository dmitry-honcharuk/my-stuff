const getActionProperties = (payload, handler) => {
  if (!handler) {
    return { payload };
  }

  return handler(payload);
};

const getAction = (type, handler) => {
  const action = payload => {
    return { type, ...getActionProperties(payload, handler) };
  };
  action.toString = () => type;

  return action;
};

export const createAction = prefix => (type, handler) =>
  getAction(`${prefix}/${type}`, handler);

export default getAction;
