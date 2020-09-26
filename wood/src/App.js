import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import store from './Configs/store';

import {
  Home,
  About,
  Gallery,
} from './Components/User';

import './Styles/app.scss';

function App() {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </Router>
      </ParallaxProvider>
    </Provider>
  );
}

export default App;
