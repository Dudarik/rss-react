import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, AboutPage, NotFoundPage } from '../pages';

interface IRouterProps {
  setCurrentPageTitle?: (newTitle: string) => void;
}

class Router extends Component<IRouterProps> {
  render() {
    const routes = [
      {
        path: '/',
        element: <HomePage pageTitle="Home" setCurrentPageTitle={this.props.setCurrentPageTitle} />,
      },
      {
        path: '/about',
        element: (
          <AboutPage pageTitle="About" setCurrentPageTitle={this.props.setCurrentPageTitle} />
        ),
      },
      {
        path: '*',
        element: (
          <NotFoundPage
            pageTitle="Not Found(404)"
            setCurrentPageTitle={this.props.setCurrentPageTitle}
          />
        ),
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
