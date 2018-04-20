import React, { Component } from 'react';

class Panel extends Component {
  render() {

    var panelConfig = {
      iconColor: this.props.iconColor,
      text: this.props.text,
      number: this.props.number
    }

     return (
      <div class="col-sm-6 col-lg-3">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <span className={'stamp stamp-md mr-3 ' + this.props.iconColor}>
            <i class="fe fe-dollar-sign"></i>
          </span>
          <div>
            <h4 class="m-0"><a href="javascript:void(0)">{ panelConfig.number } <small>{ panelConfig.text }</small></a></h4>
            <small class="text-muted">12 waiting payments</small>
          </div>
        </div>
      </div>
      </div>
     );
  }
}

export default Panel;
