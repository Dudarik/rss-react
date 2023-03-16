import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNav.module.scss';

interface IMenuLink {
  isActive: boolean;
}

class MainNav extends Component {
  render(): ReactNode {
    const isActiveLink = (link: IMenuLink) => (link.isActive ? styles.active : styles.menu_link);
    const links = [
      { path: '/', title: 'Home' },
      { path: '/about', title: 'About us' },
    ];

    return (
      <nav>
        <ul className={styles.menu}>
          {links.map((menuItem) => {
            const { title, path } = menuItem;
            return (
              <li key={title}>
                <NavLink to={path} className={isActiveLink}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default MainNav;
