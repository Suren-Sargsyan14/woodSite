import React from 'react';
import { Col } from 'react-bootstrap';
import BurgerMenu from "react-burger-menu";

import NavItem from './NavItem';

import '../../../../../Styles/flexStyles.scss';

const NavBar = () => {
  const navArray = [
    { title: "Home", path: '/' },
    { title: "About", path: '/about' },
    { title: "Gallery", path: '/gallery' },
    { title: "Contacts", path: '/contacts' },
  ];
  const Menu = BurgerMenu['bubble'];
  return (
    <Col xs={4}>
      <Menu left>
        {navArray.map(({ title, path }, index) => (
          <NavItem
            key={index + title}
            title={title}
            path={path}
          />
        ))}
      </Menu>
    </Col>
  );
};

export default NavBar;
