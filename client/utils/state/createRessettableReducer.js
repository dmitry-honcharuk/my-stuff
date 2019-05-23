import createReducer from './createReducer';

const createRessettableReducer = resetActions => reducer => {
  const initial = reducer(undefined, {});

  return (state = initial, action) => {
    if (resetActions.includes(action.type)) {
      return initial;
    }

    return reducer(state, action);
  };
};

export default createRessettableReducer;
