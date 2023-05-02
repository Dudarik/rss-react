import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, AboutPage, FormPage, NotFoundPage } from '../pages';

interface IRouterProps {
  setCurrentPageTitle?: (newTitle: string) => void;
}

const Router = (props: IRouterProps) => {
  const { setCurrentPageTitle } = props;
  const routes = [
    {
      path: '/',
      element: <HomePage {...{ pageTitle: 'Home', setCurrentPageTitle }} />,
    },
    {
      path: '/about',
      element: <AboutPage {...{ pageTitle: 'About', setCurrentPageTitle }} />,
    },
    {
      path: '/form',
      element: <FormPage {...{ pageTitle: 'Form', setCurrentPageTitle }} />,
    },
    {
      path: '/404',
      element: <NotFoundPage {...{ pageTitle: 'Not found(404)', setCurrentPageTitle }} />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => {
        const { path, element } = route;
        return <Route path={path} element={element} key={path} />;
      })}
    </Routes>
  );
};

export default Router;
