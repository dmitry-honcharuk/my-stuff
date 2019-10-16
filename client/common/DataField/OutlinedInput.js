import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MaterialOutlinedInput from '@material-ui/core/OutlinedInput';

import styles from './styles';

const useStyles = makeStyles(styles);

const propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.shape(fieldInputPropTypes),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const OutlinedInput = ({ input, label, ...props }) => {
  const classes = useStyles();
  const {
    meta: { error, touched },
  } = props;

  const isError = touched && !!error;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <label
          htmlFor={input.name}
          className={cn(classes.label, {
            [classes.errorColor]: isError,
          })}
        >
          {label}
        </label>
        {isError && (
          <span className={cn(classes.errorMessage, classes.errorColor)}>
            {error}
          </span>
        )}
      </div>
      <MaterialOutlinedInput {...input} {...props} error={isError} />
    </div>
  );
};

OutlinedInput.propTypes = propTypes;

export default OutlinedInput;
