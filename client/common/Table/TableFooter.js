import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import MaterialTableFooter from '@material-ui/core/TableFooter';

const propTypes = {
  pagination: PropTypes.node,
};
const defaultProps = {
  pagination: [],
};

const TableFooter = ({ pagination }) => {
  if (!pagination) {
    return null;
  }

  return (
    <MaterialTableFooter>
      <TableRow>{pagination}</TableRow>
    </MaterialTableFooter>
  );
};

TableFooter.propTypes = propTypes;
TableFooter.defaultProps = defaultProps;

export default TableFooter;
