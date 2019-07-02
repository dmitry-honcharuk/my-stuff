import React, { Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Dialog, useCloseDialog } from '../../../dialog';

import { useRemoveProduct } from '../../state/useOperations';
import { getProductDetails } from '../../state/selectors';

import { DIALOG_NAME } from './constants';

const RemoveProductDialog = () => {
  const { id, name } = useSelector(getProductDetails);
  const closeDialog = useCloseDialog(DIALOG_NAME);
  const removeProduct = useRemoveProduct();

  const onDelete = useCallback(() => {
    const remove = async () => {
      await removeProduct(id);
      await closeDialog();
    };

    remove();
  }, [id, removeProduct, closeDialog]);

  return (
    <Dialog
      name={DIALOG_NAME}
      title={`Remove product #${id}`}
      actions={
        <Fragment>
          <Button variant="outlined" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={onDelete}>
            Remove
          </Button>
        </Fragment>
      }
    >
      Please confirm that you whant to remove product #{id} <b>({name})</b>
    </Dialog>
  );
};

export default RemoveProductDialog;
