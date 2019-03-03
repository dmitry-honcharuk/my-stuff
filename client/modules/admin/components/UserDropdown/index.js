import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { logout as logoutAction } from '../../../auth';

import useAnchorEl from '../../../../utils/hooks/useAnchorEl';

import UserDropdown from './UserDropdown';

import s from './styles';

const UserDropdownContainer = ({ logout, classes }) => {
  const { element, setFromEvent, dropAnchor } = useAnchorEl();
  const isOpen = Boolean(element);

  return (
    <UserDropdown
      isOpen={isOpen}
      anchorEl={element}
      handleOpen={setFromEvent}
      handleClose={dropAnchor}
      items={[
        {
          id: 'email',
          render: () => (
            <div className={classes.signedLabel}>
              <Typography variant="subtitle2">Signed in as</Typography>
              <Typography>fine.ok92@gmail.com</Typography>
            </div>
          ),
        },
        {
          id: 'after-email',
          render: () => <Divider />,
        },
        {
          id: 'logout-button',
          label: 'Logout',
          handle: logout,
        },
      ]}
    />
  );
};

export default compose(
  connect(
    null,
    {
      logout: logoutAction,
    },
  ),
  withStyles(s),
)(UserDropdownContainer);
