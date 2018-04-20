import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div class="card-status bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">This is Product</h3>
                    </div>  

                    <div className="card-body">
                        Ini Product
                    </div> 
                </div>
            </div>
        );
    }
}

export default Product;
