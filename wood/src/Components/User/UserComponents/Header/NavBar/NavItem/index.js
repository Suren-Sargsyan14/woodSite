import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.scss';

const NavItem = ({ title, path }) => {
  return (
    <NavLink
      to={path}
      className={styles.navItem}
      activeClassName={styles.navItemActiveClass}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
