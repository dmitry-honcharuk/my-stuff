import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { compose, withProps } from 'recompose';

import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

import MENU_ITEMS from './menuItems';
import s from './styles';

const propTypes = {
  itemsGroup: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node,
        key: PropTypes.string,
      }).isRequired,
    ),
  ),
};
const defaultProps = {
  itemsGroup: [],
};

const Menu = ({ itemsGroup, match, classes }) =>
  itemsGroup.map((items, index) => (
    <Fragment key={index}>
      <List className={classes.menu} component="nav">
        {items.map(({ link, label, render, icon, key }) => {
          const iconNode = icon ? (
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
          ) : null;

          return (
            <ListItem selected={match.url === link} key={key || link} button>
              {iconNode}
              <Link
                component={RouterLink}
                to={link}
                underline="none"
                color="inherit"
              >
                {label}
              </Link>
            </ListItem>
          );
        })}
      </List>
      {index !== itemsGroup.length - 1 && (
        <Divider className={classes.divider} variant="middle" />
      )}
    </Fragment>
  ));

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default compose(
  withRouter,
  withProps(() => ({
    itemsGroup: MENU_ITEMS,
  })),
  withStyles(s),
)(Menu);
