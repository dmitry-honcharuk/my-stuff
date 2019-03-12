import React from 'react';

import Page from '../../components/Page';
import LoginForm from '../../components/Forms/Login';
import { LoginGreetingScreen } from '../../components/GreetingScreen';

const Login = () => (
  <Page left={<LoginGreetingScreen />} right={<LoginForm />} />
);

export default Login;
