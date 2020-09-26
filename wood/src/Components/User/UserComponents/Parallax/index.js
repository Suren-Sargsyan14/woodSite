import React from 'react';
import { Parallax } from 'react-parallax';

import background from '../../../../assets/images/bg1.jpg';

const Paralla = () => {
  return (
    <Parallax
      strength={500}
      bgImage={background}
    >
      <div className="Parallax">
        <h3>The best source for your</h3>
        <h2>old furniture restoration</h2>
        <div className="line" />
        <p>
          Whenever possible we use molds made from antiques to
          create ceiling
          <br />
          plates and holders which duplicate the grace and style of the originals.
        </p>
      </div>
    </Parallax>
  );
};

export default Paralla;
