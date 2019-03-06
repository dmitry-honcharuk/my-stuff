import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import AccountCircle from '@material-ui/icons/AccountCircle';

import s from './styles';

const propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.any,
      handle: PropTypes.func,
      render: PropTypes.func,
    }).isRequired,
  ),
  isOpen: PropTypes.bool,
  anchorEl: PropTypes.instanceOf(Element),
};
const defaultProps = {
  isOpen: false,
  anchorEl: null,
  items: [],
};

const UserDropdown = ({
  isOpen,
  anchorEl,
  items,
  handleOpen,
  handleClose,
  classes,
}) => (
  <Fragment>
    <IconButton
      aria-owns={isOpen ? 'menu-appbar' : undefined}
      aria-haspopup="true"
      onClick={handleOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Popover
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      onClose={handleClose}
    >
      {items.map(({ id, label, handle, render }) => {
        if (render) {
          return <Fragment key={id}>{render()}</Fragment>;
        }
        if (!handle) {
          return (
            <Typography key={id} className={classes.typography}>
              {label}
            </Typography>
          );
        }

        return (
          <MenuItem
            key={id}
            onClick={() => {
              handle();
              handleClose();
            }}
          >
            {label}
          </MenuItem>
        );
      })}
    </Popover>
  </Fragment>
);

UserDropdown.propTypes = propTypes;
UserDropdown.defaultProps = defaultProps;

export default withStyles(s)(UserDropdown);
