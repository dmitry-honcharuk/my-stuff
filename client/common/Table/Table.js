import React from 'react';
import PropTypes from 'prop-types';

import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import TableHeadContent from './TableHeadContent';
import TableBodyContent from './TableBodyContent';
import TableFooter from './TableFooter';

const propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.object),
  noDataMessage: PropTypes.node,
  pagination: PropTypes.node,
};
const defaultProps = {
  dataKey: '_id',
  data: [],
  noDataMessage: 'No data provided for this list.',
  pagination: null,
};

const Table = ({ columns, dataKey, dataSource, noDataMessage, pagination }) => (
  <MaterialTable>
    <TableHead>
      <TableHeadContent columns={columns} />
    </TableHead>
    <TableBody>
      <TableBodyContent
        columns={columns}
        dataKey={dataKey}
        dataSource={dataSource}
        noDataMessage={noDataMessage}
      />
    </TableBody>
    <TableFooter pagination={pagination} />
  </MaterialTable>
);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
