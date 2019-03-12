import React from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { IMAGES } from '@core/constants';

import GreetingScreen from './GreetingScreen';

import s from './styles';

const RegisterGreetingScreen = ({ classes }) => (
  <GreetingScreen
    image={IMAGES.REGISTER_BACKGROUND_PATH}
    content={
      <div className={cn(classes.greetingContent, classes.dark)}>
        <Typography align="center" variant="h4" color="inherit">
          Welcome!
        </Typography>
        <Typography align="center" color="inherit">
          Enter your personal details and proceed
        </Typography>
      </div>
    }
  />
);

export default withStyles(s)(RegisterGreetingScreen);
