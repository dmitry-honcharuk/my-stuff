import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
const defaultProps = {
  columns: [],
};

const TableHeadContent = ({ columns }) => (
  <TableRow>
    {columns.map(({ title, key }) => (
      <TableCell key={key}>{title}</TableCell>
    ))}
  </TableRow>
);

TableHeadContent.propTypes = propTypes;
TableHeadContent.defaultProps = defaultProps;

export default TableHeadContent;
