import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        var data = {
            title: this.props.title,
            price: this.props.price,
            desc: this.props.desc
        };
        
        return (
            <div className="col-md-6">
                <div className="card">
                    <div class="card-body">
                        <div class="mb-4 text-center">
                          
                        </div>

                        <h4 class="card-title">
                            <a href="javascript:void(0)">
                               { data.title }
                            </a>
                        </h4>

                        <div class="card-subtitle">
                          Apple
                        </div>

                        <div class="mt-5 d-flex align-items-center">
                          <div class="product-price">
                            <strong>{ data.price }</strong>
                          </div>
                          <div class="ml-auto">
                            <a href="javascript:void(0)" class="btn btn-primary"><i class="fe fe-plus"></i> Add to cart</a>
                          </div>
                        </div>

                      </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
