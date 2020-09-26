import React from 'react';
import { Row } from 'react-bootstrap';

import SquareItem from '../SquareItem';

const Main = ({ title, description, image }) => (
  <Row className="squareContainer">
    <SquareItem
      type
      title={title}
      description={description}
    />
    <SquareItem image={image} />
  </Row>
);

export default Main;
