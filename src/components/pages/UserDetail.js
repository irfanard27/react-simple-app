import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        var prop = {
            name: this.props.name
        }
        
        return (
            <div>
                <div className="card">
                    <div className="card-status bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">{ prop.name }</h3>
                    </div>  

                    <div className="card-body">
                        { prop.name }
                    </div> 
                </div>
            </div>
        );
    }
}

export default UserDetail;