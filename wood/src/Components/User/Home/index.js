import React from 'react';

import { Parallax, AppContainer } from '../UserComponents';

import Carousel from './Carousel';
import Main from './Main';
import LatestWorks from './LatestWorks';

import './Home.scss';

function Home() {
  return (
    <AppContainer>
      <Carousel />
      <Main />
      <Parallax />
      <LatestWorks />
    </AppContainer>
  );
}

export default Home;
