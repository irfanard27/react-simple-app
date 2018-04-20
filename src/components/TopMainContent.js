import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

const HomePage = () => (
  <Home />
)

const AboutPage = () => (
  <About />
)

const ProductPage = () => (
  <Product />
)


class TopMainContent extends Component {
  render() {
     return (
        <Router>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/product" component={ProductPage} />
            </div>
        </Router>
     );
  }
}

export default TopMainContent;

