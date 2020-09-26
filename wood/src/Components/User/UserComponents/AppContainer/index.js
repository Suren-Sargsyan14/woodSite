import React from 'react';
import { Container } from 'react-bootstrap';

import { Header, Footer } from '../';

import './appContainer.scss';

const AppContainer = ({ children }) => {
  return (
    <Container 
      fluid
      id="appContainer"
    >
      <Header />
      <div className="afterHeader">
        {children}
      </div>
      <Footer />
    </Container>
  )
};

export default AppContainer;
