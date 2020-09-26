import React from 'react';

import {
  TextImageLeft,
  TextImageRight,
} from '../../UserComponents';

import infoImg1 from '../../../../assets/images/info-img01.jpg';
import infoImg2 from '../../../../assets/images/info-img02.jpg';

import './Main.scss';

const Main = () => {
  const blocks = [
    {
      image: infoImg1,
      title: "WELCOME",
      description: "WELCOME TO ANTIQUE RESTORE COMPANY! OUR BARN FEATURES A HUGE ASSORTMENT OF ANTIQUE FURNITURE AND LIGHTING AS WELL AS A LARGE SELECTION OF REPRODUCTION LIGHTING AND FURNITURE. FOR THE WEB WE OFFER A SMALL SAMPLE.",
    },
    {
      image: infoImg2,
      title: "ABOUT",
      description: "TO SEE EVERYTHING COME ON OUT FOR A VISIT. FOR MANY OF THE ANTIQUES, WE PREFER TO TALK TO YOU BEFORE ANY PURCHASE IS MADE. ALONG WITH A LARGE ARRAY OF HANDCRAFTED AND ANTIQUE FURNITURE, WE ARE THE DEFINITION OF EXPERTISE, CREATIVITY AND QUALITY. WE USE ONLY THE FINEST MATERIELS AVAILABLE",
    },
  ];
  return (
    <div className="p-2">
      <TextImageRight
        title={blocks[0].title}
        description={blocks[0].description}
        image={blocks[0].image}
      />
      <TextImageLeft
        title={blocks[1].title}
        description={blocks[1].description}
        image={blocks[1].image}
      />
    </div>
  );
};

export default Main;
