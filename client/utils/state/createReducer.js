const createReducer = (initialState, handlers = {}) => (
  state = initialState,
  action,
) => {
  const { type, payload, ...other } = action;
  const handler = handlers[type] || handlers.default;

  return handler ? handler(state, payload, other) : state;
};

export default createReducer;
