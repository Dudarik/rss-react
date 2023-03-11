import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';

class Router extends Component {
  render() {
    return (
      <Routes>
        {routes.map((route) => {
          const { path, element } = route;
          return <Route path={path} element={element} key={path}></Route>;
        })}
      </Routes>
    );
  }
}

export default Router;
