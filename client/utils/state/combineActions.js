const combineActions = (actions, handler) => reducer => {
  const initial = reducer(undefined, {});

  return (state = initial, action) => {
    const { type, payload, ...other } = action;
    if (actions.includes(type)) {
      return handler(state, payload, other);
    }

    return reducer(state, action);
  };
};

export default combineActions;
