import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ImageList, SectionHeading } from '../../UserComponents';

import { setLatestProducts } from '../../../../Actions/main';

const LatestWorks = () => {
  const dispatch = useDispatch();
  const images = useSelector(({ main: { latestProducts } }) => latestProducts);
  
  useEffect(() => {
    dispatch(setLatestProducts());
  }, []);
  
  return (
    <div>
      <SectionHeading title="Latest Works" />
      <ImageList images={images} />
    </div>
  );
};
export default LatestWorks;
