import React from 'react';
import { Facebook, Instagram } from '@material-ui/icons';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h6 className="dash">Contacts</h6>
      <div className="lightLine" />
      <address>4578 Marmora Road, Glasgow, D04 89GR</address>
      <div className="phone">TEL: <a href="callto:x">800-2345-6789</a></div>
      <div className="icons">
        <a href="aaa">
          <Facebook fontSize="large" />
        </a>
        <a href="aaa">
          <Instagram fontSize="large" />
        </a>
      </div>
    </div>
  )
};

export default Footer;
