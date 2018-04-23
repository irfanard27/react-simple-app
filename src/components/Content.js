import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';


const HomePage = () => (
  <Home />
)

const AboutPage = () => (
  <About />
)

const ProductPage = () => (
  <Product />
)

const UserPage = () => (
  <Users />
)

const UserDetailPage = ({ match }) => (
  <UserDetail name={match.params.name} />
)

class Content extends Component {
  render() {
     return (
        <Router>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/product" component={ProductPage} />
              <Route path="/user" component={UserPage} />
              <Route path="/user_detail/:name" component={UserDetailPage} />
            </div>
        </Router>
     );
  }
}

export default Content;

