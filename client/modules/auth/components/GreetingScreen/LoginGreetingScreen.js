import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { IMAGES } from '@core/constants';

import GreetingScreen from './GreetingScreen';

import s from './styles';

const LoginGreetingScreen = ({ classes }) => (
  <GreetingScreen
    image={IMAGES.LOGIN_BACKGROUND_PATH}
    content={
      <div className={classes.greetingContent}>
        <Typography align="center" variant="h4">
          Welcome Back!
        </Typography>
        <Typography align="center" className={classes.greetingText}>
          Please sign in with your info to stay connected with us
        </Typography>
      </div>
    }
  />
);

export default withStyles(s)(LoginGreetingScreen);
