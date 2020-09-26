import React from 'react';
import { Row } from 'react-bootstrap';
import ListItem from './ListItem';

import './imageList.scss';

const ImageList = ({ images }) => {
  return (
    <Row className="imageListContainer">
      {images.map(v => (
        <ListItem
          image={v.name}
          key={v.id}
        />
      ))}
    </Row>
  )
};

export default ImageList;
