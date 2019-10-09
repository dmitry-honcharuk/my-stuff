import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import Table, { Pagination } from '@client/common/Table';

const propTypes = {
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired,
  total: PropTypes.number,
  perPage: PropTypes.number,
  page: PropTypes.number,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
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
    render: ({ _id, name }) => (
      <Link component={RouterLink} to={`/products/${_id}`}>
        {name}
      </Link>
    ),
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
        page={page - 1}
        onPageChange={(_, newPage) => onPageChange(newPage + 1)}
        onChangeRowsPerPage={({ target }) => onPerPageChange(target.value)}
      />
    }
  />
);

ProductsListView.propTypes = propTypes;
ProductsListView.defaultProps = defaultProps;

export default ProductsListView;
