import React from 'react';
import { Row } from 'react-bootstrap';

import SquareItem from '../SquareItem';

const Main = ({ title, description, image }) => (
  <Row className="squareContainer align-items-stretch">
    <SquareItem image={image} />
    <SquareItem
      type
      title={title}
      description={description}
    />
  </Row>
);

export default Main;
