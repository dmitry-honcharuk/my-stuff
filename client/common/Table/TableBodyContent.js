import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired,
      dataIndex: PropTypes.string,
      render: PropTypes.func,
      defaultValue: PropTypes.node,
    }),
  ).isRequired,
  dataKey: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.object),
  noDataMessage: PropTypes.node,
};
const defaultProps = {
  dataKey: 'id',
  dataSource: [],
  noDataMessage: 'No data provided for this list.',
};

const TableBodyContent = ({ columns, dataKey, dataSource, noDataMessage }) => {
  if (dataSource.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={columns.length}>{noDataMessage}</TableCell>
      </TableRow>
    );
  }

  return dataSource.map(item => (
    <TableRow key={item[dataKey]}>
      {columns.map(({ key, render, dataIndex, defaultValue }) => {
        const content = render ? render(item) : get(item, dataIndex);
        return <TableCell key={key}>{content || defaultValue}</TableCell>;
      })}
    </TableRow>
  ));
};

TableBodyContent.propTypes = propTypes;
TableBodyContent.defaultProps = defaultProps;

export default TableBodyContent;
