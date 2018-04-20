import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Header extends Component {
  render() {
     return (
        <div className="header collpase d-lg d-lg-flex p-0">
          <div className="container">
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fe fe-home"></i> 
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about" className="nav-link">
                    <i className="fe fe-home"></i> 
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Products</a>
                </li>
              </ul>
            </div> 
          </div>
        </div>
     );
  }
}

export default Header;
