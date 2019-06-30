import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MaterialDialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { useCloseDialog } from '../../utils';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
};
const defaultProps = {
  actions: null,
};

const ConnectedDialog = ({ isVisible, name, title, actions, children }) => {
  const closeDialog = useCloseDialog(name);

  return (
    <MaterialDialog open={isVisible} onClose={closeDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MaterialDialog>
  );
};

ConnectedDialog.propTypes = propTypes;
ConnectedDialog.defaultProps = defaultProps;

const mapStateToProps = ({ dialogs }, { name }) => {
  const { [name]: dialog } = dialogs;

  return {
    isVisible: !!dialog,
  };
};

export default connect(mapStateToProps)(ConnectedDialog);
