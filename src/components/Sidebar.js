import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
     return (
        <div>
            <h3>Sidebar Menu</h3>
            <div className="list-group list-group-transparent mb-0">
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center active">
                    <span class="icon mr-3"><i class="fe fe-inbox"></i></span>Dashboard <span class="ml-auto badge badge-primary">14</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                    <span class="icon mr-3"><i class="fe fe-briefcase"></i></span>Products
                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                    <span class="icon mr-3"><i class="fe fe-users"></i></span>Users 
                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                    <span class="icon mr-3"><i class="fe fe-inbox"></i></span>Seatting 
                </a>
            </div>
        </div>
     );
  }
}

export default Sidebar;

