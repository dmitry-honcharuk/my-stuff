import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import EditableForm from '@client/common/EditableForm';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ProductDetails = ({ product, handleSubmit }) => {
  const productFields = useMemo(() => {
    const keys = ['name', 'description'];
    return Object.keys(product)
      .filter(key => keys.includes(key))
      .map(key => ({
        name: key,
        value: product[key],
        label: key,
      }));
  }, [product]);

  const onSubmit = useCallback(
    handleSubmit(() => {
      console.info('SUBMIT');
    }),
    [],
  );

  return <EditableForm onSubmit={onSubmit} dataSet={productFields} />;
};

ProductDetails.propTypes = propTypes;

export default reduxForm({
  form: 'productUpdate',
})(ProductDetails);
