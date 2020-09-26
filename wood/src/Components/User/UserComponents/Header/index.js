import React from 'react';

import Logo from './Logo';
import NavBar from './NavBar';
import Languages from './Languages';

import '../../../../Styles/flexStyles.scss';
import './header.scss';

const Header = () => {
  return (
    <div className="d-flex-around header">
      <NavBar />
      <Logo />
      <Languages />
    </div>
  );
};

export default Header;
