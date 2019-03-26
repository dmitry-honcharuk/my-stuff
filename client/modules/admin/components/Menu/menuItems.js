import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';

export default [
  [
    {
      link: '/',
      label: 'Home',
      icon: <HomeIcon fontSize="inherit" />,
    },
  ],
  [
    {
      link: '/create-product',
      label: 'Add Product',
      icon: <AddIcon fontSize="inherit" />,
    },
  ],
  [
    {
      link: '/users',
      label: 'Users',
      icon: <PeopleIcon fontSize="inherit" />,
    },
  ],
];
