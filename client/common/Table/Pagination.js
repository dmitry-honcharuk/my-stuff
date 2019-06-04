import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const propTypes = {
  total: PropTypes.number,
  onPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
const defaultProps = {
  page: 1,
  rowsPerPage: 10,
};

const Pagination = ({ total, onPageChange, page, rowsPerPage }) => {
  if (!total || !onPageChange) {
    return null;
  }

  return (
    <TablePagination
      component={'td'}
      count={total}
      onChangePage={onPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
    />
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
