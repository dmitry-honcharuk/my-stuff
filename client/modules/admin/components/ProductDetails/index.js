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

const propTypes = {
  productFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
    }),
  ).isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ProductDetails = ({ productFields, isEdit, handleSubmit }) => {
  const onSubmit = useCallback(
    handleSubmit(() => {
      console.info('SUBMIT');
    }),
    [],
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
  connect(mapStateToProps),
  hideIf(({ product }) => isEmpty(product)),
  withProps(({ product }) => ({
    productFields: getProductFields(product),
    initialValues: pick(product, ['name', 'description']),
  })),
  reduxForm({
    form: PRODUCT_DETAILS_FORM,
  }),
)(ProductDetails);
