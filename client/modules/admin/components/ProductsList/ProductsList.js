import React from 'react';
import PropTypes from 'prop-types';

import Table, { Pagination } from '@client/common/Table';

const propTypes = {
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired,
  total: PropTypes.number,
  perPage: PropTypes.number,
  page: PropTypes.number,
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
  total: 0,
  perPage: 10,
  page: 1,
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

const ProductsListView = ({
  products,
  onPageChange,
  onPerPageChange,
  total,
  perPage,
  page,
}) => (
  <Table
    dataSource={products}
    columns={COLUMNS}
    pagination={
      <Pagination
        total={total}
        rowsPerPage={perPage}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        onChangeRowsPerPage={({ target }) => onPerPageChange(target.value)}
      />
    }
  />
);

ProductsListView.propTypes = propTypes;
ProductsListView.defaultProps = defaultProps;

export default ProductsListView;
