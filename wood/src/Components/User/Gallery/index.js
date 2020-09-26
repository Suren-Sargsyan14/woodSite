import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../../../Actions/main';

import {
  ImageList,
  Pagination,
  AppContainer,
  TextImageLeft,
  SectionHeading,
} from '../UserComponents';

import infoImg1 from "../../../assets/images/info-img01.jpg";

function Gallery() {
  const dispatch = useDispatch();
  const { products: images, page } = useSelector(({ main }) => main);

  useEffect(() => {
    dispatch(setProducts());
  }, [page]);

  const blocks = [
    {
      image: infoImg1,
      title: "OUR LATEST PROJECT",
      description: "PROIN EU PURUS SAPIEN, EU ACCUMSAN DOLOR. NUNC IACULIS LIGULA EGET MASSA DICTUM QUIS PORTTITOR ORCI ELEMENTUM! IN LOBORTIS CONSECTETUR ELIT SED FRINGILLA? ALIQUAM MALESUADA URNA EU.",
    }
  ];
  return (
    <AppContainer>
      <TextImageLeft
        image={infoImg1}
        title={blocks[0].title}
        description={blocks[0].description}
      />
      <SectionHeading title="OUR GALLERY" />
      <ImageList images={images} />
      <Pagination />
    </AppContainer>
  );
}

export default Gallery;
