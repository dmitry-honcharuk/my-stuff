import { useDispatch } from 'react-redux';

import { openDialog } from '../state/operations';

const useOpenDialog = name => {
  const dispatch = useDispatch();

  return data => dispatch(openDialog(name, data));
};

export default useOpenDialog;
