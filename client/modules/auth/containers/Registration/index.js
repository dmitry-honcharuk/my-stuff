import React from 'react';

import Page from '../../components/Page';
import RegistrationForm from '../../components/Forms/Registration';
import { RegisterGreetingScreen } from '../../components/GreetingScreen';

const Register = () => (
  <Page left={<RegisterGreetingScreen />} right={<RegistrationForm />} />
);

export default Register;
