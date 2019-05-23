const createReducer = (initialState, handlers = {}) => (
  state = initialState,
  action,
) => {
  const handler = handlers[action.type] || handlers.default;

  return handler ? handler(state, action) : state;
};

export default createReducer;
