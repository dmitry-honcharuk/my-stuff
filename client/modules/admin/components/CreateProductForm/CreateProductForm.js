import React from 'react';
import PropTypes from 'prop-types';

import EditableDetails from '@client/common/EditableDetails';

const CreateProductForm = ({ onSubmit, productFields }) => {
  return <EditableDetails isEdit onSubmit={onSubmit} dataSet={productFields} />;
};

CreateProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  productFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
    }),
  ),
};

export default CreateProductForm;
