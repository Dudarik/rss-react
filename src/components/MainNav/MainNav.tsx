import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNav.module.scss';

class MainNav extends Component {
  render(): ReactNode {
    return (
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : styles.menu_link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : styles.menu_link)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/item"
              className={({ isActive }) => (isActive ? styles.active : styles.menu_link)}
            >
              for 404
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
