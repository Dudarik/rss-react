import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, AboutPage, NotFoundPage } from '../pages';

interface IRouterProps {
  setCurrentPageTitle?: (newTitle: string) => void;
}

class Router extends Component<IRouterProps> {
  render() {
    const { setCurrentPageTitle } = this.props;
    const routes = [
      {
        path: '/',
        element: <HomePage pageTitle="Home" setCurrentPageTitle={setCurrentPageTitle} />,
      },
      {
        path: '/about',
        element: <AboutPage pageTitle="About" setCurrentPageTitle={setCurrentPageTitle} />,
      },
      {
        path: '/404',
        element: (
          <NotFoundPage pageTitle="Not Found(404)" setCurrentPageTitle={setCurrentPageTitle} />
        ),
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
  }
}

export default Router;
