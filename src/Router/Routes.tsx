import React from 'react';
import { HomePage, AboutPage, NotFoundPage } from '../pages';

const BASE_APP_NAME = 'RSS-React';
export const routes = [
  { path: '/', element: <HomePage pageTitle={`HomePage - ${BASE_APP_NAME}`} /> },
  { path: '/about', element: <AboutPage pageTitle={`AboutPage - ${BASE_APP_NAME}`} /> },
  { path: '*', element: <NotFoundPage pageTitle={`NotFoundPage - ${BASE_APP_NAME}`} /> },
];
