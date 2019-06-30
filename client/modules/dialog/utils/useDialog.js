import useOpenDialog from './useOpenDialog';
import useCloseDialog from './useCloseDialog';

const useDialog = name => {
  const openDialog = useOpenDialog(name);
  const closeDialog = useCloseDialog(name);

  return {
    openDialog,
    closeDialog,
  };
};

export default useDialog;
