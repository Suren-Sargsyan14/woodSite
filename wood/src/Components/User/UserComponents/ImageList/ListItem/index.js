import React from 'react';
import { Col } from 'react-bootstrap';


const listItem = ({ image }) => (
  <Col 
    xs={12}
    sm={6}
    md={4}
    lg={3}
    className="listItem"
  >
    <div>
      <img
        src={require('../../../../../assets/images/' + image)}
        alt=""
      />
      <span className="thumb_overlay" />
    </div>
  </Col>
);

export default listItem;
