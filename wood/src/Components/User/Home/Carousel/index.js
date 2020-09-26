import React from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

import slide1 from '../../../../assets/images/slide01.jpg';
import slide2 from '../../../../assets/images/slide02.jpg';
import slide3 from '../../../../assets/images/slide03.jpg';

import './Carousel.scss';

const slides = [
  slide1,
  slide2,
  slide3,
];
const HomeCarousel = () => {
  var items = [
    {
      name: "YOUR ANTIQUES ARE IN",
      description: "GOOD HANDS",
    },
    {
      name: "OFFERING NEW APPEARANCE",
      description: "TO YOUR OLD FURNITURE",
    },
    {
      name: "QUALITY RESTORING AND",
      description: "CONSERVING ALL TYPES OF FURNITURE",
    },
  ];

  return (
    <Carousel>
      {items.map(({ name, description }, i) => (
        <Carousel.Item key={i}>
          <img
            src={slides[i]}
            alt="First slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>{name}</h3>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
};

export default HomeCarousel;
