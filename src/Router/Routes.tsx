import React from 'react';
import { HomePage, AboutPage, NotFoundPage } from '../pages';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
];
