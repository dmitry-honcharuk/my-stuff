import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

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
      link: '/products',
      label: 'Products',
      icon: <ShoppingCart fontSize="inherit" />,
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
