import React from 'react';
import PropTypes from 'prop-types';

import Table from '@client/common/Table';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};
const defaultProps = {
  products: [],
};

const COLUMNS = [
  {
    title: 'Title',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    defaultValue: (
      <span style={{ color: 'grey' }}>No description Provided</span>
    ),
  },
];

const ProductsListView = ({ products }) => (
  <Table dataSource={products} columns={COLUMNS} />
);

ProductsListView.propTypes = propTypes;
ProductsListView.defaultProps = defaultProps;

export default ProductsListView;
