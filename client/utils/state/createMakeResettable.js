import createReducer from './createReducer';

const createMakeResettable = resetActions => reducer => {
  const initial = reducer(undefined, {});

  return (state = initial, action) => {
    if (resetActions.includes(action.type)) {
      return initial;
    }

    return reducer(state, action);
  };
};

export default createMakeResettable;
