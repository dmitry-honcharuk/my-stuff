import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const propTypes = {
  total: PropTypes.number,
  onPageChange: PropTypes.func,
};

const Pagination = ({ total, onPageChange, ...props }) => {
  if (!total || !onPageChange) {
    return null;
  }

  return (
    <TablePagination
      component={'td'}
      count={total}
      onChangePage={onPageChange}
      {...props}
    />
  );
};

Pagination.propTypes = propTypes;

export default Pagination;
