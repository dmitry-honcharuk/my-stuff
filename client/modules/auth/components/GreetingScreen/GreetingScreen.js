import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import s from './styles';

const propTypes = {
  content: PropTypes.any.isRequired,
  image: PropTypes.string,
};
const defaultProps = {
  image: null,
};

const GreetingScreen = ({ content, image, classes }) => (
  <div
    className={classes.wrapper}
    {...image && { style: { backgroundImage: `url("${image}")` } }}
  >
    {content}
  </div>
);

GreetingScreen.propTypes = propTypes;
GreetingScreen.defaultProps = defaultProps;

export default withStyles(s)(GreetingScreen);
