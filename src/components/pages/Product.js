import React, { Component } from 'react';
import ProductList from "../ProductList";
import axios from 'axios';


var prod = [
    {
        title:"Iphone 6 Gold edition",
        price:'$6799',
        desc: "lorem ipsum dolor"
    },
    {
        title:"Iphone 7 premium",
        price:'$3455',
        desc: "lorem ipsum dolor"
    },
    {
        title:"Iphone x Limited Edition",
        price:'$1200',
        desc: "lorem ipsum dolor"
    },
    {
        title:"Iphone 6 Gold edition",
        price:'$6799',
        desc: "lorem ipsum dolor"
    },

    {
        title:"Iphone 6 Gold edition",
        price:'$6799',
        desc: "lorem ipsum dolor"
    },

    {
        title:"Iphone 6 Gold edition",
        price:'$6799',
        desc: "lorem ipsum dolor"
    }

];

var namesList = prod.map(function(item){
    return <ProductList title={item.title} price={item.price} desc={item.desc} />;
})

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
                        Ini Halaman Product
                    </div> 
                </div>
                
                <div className="row">
                    { namesList }
                </div>

            </div>
        );
    }
}

export default Product;
