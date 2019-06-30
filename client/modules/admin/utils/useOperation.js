import { useDispatch } from 'react-redux';

const useOperation = operation => {
  const dispatch = useDispatch();

  return (...data) => dispatch(operation(...data));
};

export default useOperation;
