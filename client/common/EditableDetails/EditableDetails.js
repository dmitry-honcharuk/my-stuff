import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DataField from '../DataField';

import styles from './styles';

const useStyles = makeStyles(styles);

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
    }),
  ),
  actions: PropTypes.node,
  isEdit: PropTypes.bool,
};
const defaultProps = {
  dataSet: [],
  actions: null,
  isEdit: false,
};

const EditableDetails = ({ onSubmit, dataSet, actions, isEdit }) => {
  const classes = useStyles();
  const actionButton = (
    <Button variant="contained" color="primary" type="submit">
      Save
    </Button>
  );
  return (
    <form onSubmit={onSubmit}>
      {dataSet.map(item => (
        <Paper key={item.name} className={classes.root}>
          <DataField name={item.name} label={item.label} isEdit={isEdit} />
        </Paper>
      ))}
      {isEdit && (
        <div className={classes.actions}>{actions || actionButton}</div>
      )}
    </form>
  );
};

EditableDetails.propTypes = propTypes;
EditableDetails.defaultProps = defaultProps;

export default EditableDetails;
