import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
     return (
        <div>
            <h3>Sidebar Menu</h3>
            <div className="list-group list-group-transparent mb-0">
                <a href="/" className="list-group-item list-group-item-action d-flex align-items-center active">
                    <span className="icon mr-3"><i className="fe fe-inbox"></i></span>Dashboard <span className="ml-auto badge badge-primary">14</span>
                </a>

                <a href="/product" className="list-group-item list-group-item-action d-flex align-items-center">
                    <span className="icon mr-3"><i className="fe fe-briefcase"></i></span>Products
                </a>

                <a href="/user" className="list-group-item list-group-item-action d-flex align-items-center">
                    <span className="icon mr-3"><i className="fe fe-users"></i></span>Users 
                </a>

                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <span className="icon mr-3"><i className="fe fe-inbox"></i></span>Seatting 
                </a>
            </div>
        </div>
     );
  }
}

export default Sidebar;

