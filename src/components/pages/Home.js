import React, { Component } from 'react';
import Panel from '../Panel';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Panel text="Hello text" number="120" iconColor="bg-red"/>
                    <Panel text="Sales action" number="100" iconColor="bg-blue"/>
                    <Panel text="Users" number="100" iconColor="bg-green"/>
                    <Panel text="Helli text" number="120" iconColor="bg-orange"/>
                </div>

                <div className="card">
                    <div class="card-status bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">This is content</h3>
                    </div>  

                    <div className="card-body">
                        this is content
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;
