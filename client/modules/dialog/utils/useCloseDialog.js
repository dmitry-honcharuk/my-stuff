import { useDispatch } from 'react-redux';

import { closeDialog } from '../state/operations';

const useCloseDialog = name => {
  const dispatch = useDispatch();

  return () => dispatch(closeDialog(name));
};

export default useCloseDialog;
