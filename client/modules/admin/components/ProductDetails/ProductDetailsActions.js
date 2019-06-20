import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withRouteParams from '@client/utils/hoc/withRouteParams';

import {
  disableProductEditMode,
  enableProductEditMode,
  removeProduct,
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
  removeProduct: PropTypes.func.isRequired,
  isEditEnabled: PropTypes.bool.isRequired,
};

const ProductDetailsActions = ({
  productId,
  enableEditMode,
  disableEditMode,
  removeProduct,
  isEditEnabled,
}) => {
  const classes = useStyles();
  const onDelete = useCallback(() => {
    removeProduct(+productId);
  }, [removeProduct, productId]);

  const actions = isEditEnabled ? (
    <Button color="primary" onClick={disableEditMode}>
      Cancel
    </Button>
  ) : (
    <Fragment>
      <Button color="primary" onClick={enableEditMode}>
        Edit
      </Button>
      <Button color="secondary" onClick={onDelete}>
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
      removeProduct,
    },
  ),
)(ProductDetailsActions);
