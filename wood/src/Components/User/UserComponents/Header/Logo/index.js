import React from 'react';
import { Col } from 'react-bootstrap';
import logo from '../../../../../assets/images/logo.png';

import '../header.scss';

const Logo = () => {
  return (
    <Col 
      xs={4}
      className="d-flex justify-content-center"
    >
      <img
        alt=""
        src={logo}
        className="logoImage"
      />
    </Col>
  );
};

export default Logo;
