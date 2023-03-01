import React from 'react';
import Details from '../pages/Details/Details';
import HomePage from '../pages/HomePage';

export const paths = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/:id',
    element: <Details />,
  },
];
