import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import useAction from '@client/utils/hooks/useAction';

import * as operations from '../../state/operations';
import { getEmptyProduct, getProductFeildList } from '../../utils';

import CreateProductForm from './CreateProductForm';

const productFields = getProductFeildList(getEmptyProduct());

const CreateProductFormContainer = ({ handleSubmit, ...props }) => {
  const createProduct = useAction(operations.createProduct);
  const onSubmit = useCallback(handleSubmit(createProduct), [
    createProduct,
    handleSubmit,
  ]);

  return (
    <CreateProductForm onSubmit={onSubmit} productFields={productFields} />
  );
};

CreateProductFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'productCreation',
})(CreateProductFormContainer);
