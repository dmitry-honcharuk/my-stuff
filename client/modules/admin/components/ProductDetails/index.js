import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';

import hideIf from '@client/utils/hoc/hideIf';

import EditableDetails from '@client/common/EditableDetails';
import {
  getProductDetails,
  getProductEditMode,
  getProductFields,
} from '../../state/selectors';

import { PRODUCT_DETAILS_FORM } from '../../constants';

import { updateProduct } from '../../state/operations';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  productFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
    }),
  ).isRequired,
  isEdit: PropTypes.bool.isRequired,
  updateProduct: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ProductDetails = ({
  product,
  productFields,
  isEdit,
  updateProduct,
  handleSubmit,
}) => {
  const { id: productId } = product;
  const onSubmit = useCallback(
    handleSubmit(values => updateProduct(productId, values)),
    [productId, updateProduct, handleSubmit],
  );

  return (
    <EditableDetails
      onSubmit={onSubmit}
      isEdit={isEdit}
      dataSet={productFields}
    />
  );
};

ProductDetails.propTypes = propTypes;

const mapStateToProps = state => ({
  isEdit: getProductEditMode(state),
  product: getProductDetails(state),
});

export default compose(
  connect(
    mapStateToProps,
    {
      updateProduct,
    },
  ),
  hideIf(({ product }) => isEmpty(product)),
  withProps(({ product }) => ({
    productFields: getProductFields(product),
    initialValues: pick(product, ['name', 'description']),
  })),
  reduxForm({
    form: PRODUCT_DETAILS_FORM,
  }),
)(ProductDetails);
