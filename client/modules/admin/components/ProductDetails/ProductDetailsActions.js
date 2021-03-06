import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withRouteParams from '@client/utils/hoc/withRouteParams';

import { useOpenDialog } from '../../../dialog';

import { DIALOG_NAME as DELETE_PRODUCT_DIALOG } from '../RemoveProductDialog/constants';
import {
  disableProductEditMode,
  enableProductEditMode,
} from '../../state/operations';
import { getProductEditMode } from '../../state/selectors';

const useStyles = makeStyles(({ spacing }) => ({
  actions: {
    marginBottom: spacing(2),
  },
}));

const propTypes = {
  productId: PropTypes.string.isRequired,
  enableEditMode: PropTypes.func.isRequired,
  disableEditMode: PropTypes.func.isRequired,
  isEditEnabled: PropTypes.bool.isRequired,
};

const ProductDetailsActions = ({
  enableEditMode,
  disableEditMode,
  isEditEnabled,
}) => {
  const classes = useStyles();
  const openDialog = useOpenDialog(DELETE_PRODUCT_DIALOG);

  const actions = isEditEnabled ? (
    <Button color="primary" onClick={disableEditMode}>
      Cancel
    </Button>
  ) : (
    <Fragment>
      <Button color="primary" onClick={enableEditMode}>
        Edit
      </Button>
      <Button color="secondary" onClick={() => openDialog()}>
        Remove
      </Button>
    </Fragment>
  );

  return <div className={classes.actions}>{actions}</div>;
};

ProductDetailsActions.propTypes = propTypes;

const mapStateToProps = state => ({
  isEditEnabled: getProductEditMode(state),
});

export default compose(
  withRouteParams,
  connect(
    mapStateToProps,
    {
      enableEditMode: enableProductEditMode,
      disableEditMode: disableProductEditMode,
    },
  ),
)(ProductDetailsActions);
