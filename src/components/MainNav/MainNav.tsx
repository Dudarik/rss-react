import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
  render(): ReactNode {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/item">item</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
