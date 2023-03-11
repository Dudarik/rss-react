import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNav.module.scss';

interface IMenuLink {
  isActive: boolean;
}

class MainNav extends Component {
  render(): ReactNode {
    const isActiveLink = (link: IMenuLink) => (link.isActive ? styles.active : styles.menu_link);
    const menu = [
      { path: '/', title: 'Home' },
      { path: '/about', title: 'About us' },
    ];

    return (
      <nav>
        <ul className={styles.menu}>
          {menu.map((menuItem) => (
            <li key={menuItem.title}>
              <NavLink to={menuItem.path} className={isActiveLink}>
                {menuItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default MainNav;
