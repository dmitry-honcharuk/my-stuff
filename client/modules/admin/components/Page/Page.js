import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Sidebar from '../Sidebar';
import Header from '../Header';

import s from './styles';

const propTypes = {
  title: PropTypes.string,
};
const defaultProps = {
  title: null,
};

const Page = ({ title, classes, children }) => (
  <div className={classes.page}>
    <Sidebar />
    <main className={classes.content}>
      <Header title={title} />
      {children}
    </main>
  </div>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default withStyles(s)(Page);
