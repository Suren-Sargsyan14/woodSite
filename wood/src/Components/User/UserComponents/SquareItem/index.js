import React from 'react';
import { Col } from 'react-bootstrap';

const InfoSquare = ({ type, title, description, image }) => type ? (
  <Col
    md={6}
    xs={12}
    className="square my-1 my-md-0"
  >
    <div className="squareText">
      <h2>{title}</h2>
      <section className="line" />
      <div>{description}</div>
    </div>
  </Col>
) : (
  <Col
    md={6}
    xs={12}
    className="square my-1 my-md-0"
  >
    <img
      src={image}
      alt=""
    />
  </Col>
);

export default InfoSquare;
