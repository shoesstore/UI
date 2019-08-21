import React, { Component } from 'react';
import { CardShoesStore }   from '../../ui';
import                           '../../css/card/card.css';

export default class ProductList extends Component {

    render() {

        const products = [
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 1000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 2000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 3000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 4000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 4000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 4000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 4000, description: "New Product" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Shoes", price: 4000, description: "New Product" },
        ];

        return (
            <div className="row container-fluid">
                {
                    products.map((product, index) => {
                        return(
                            <div>
                                <CardShoesStore
                                    key={index}
                                    product={product}
                                    height={400}
                                    width={300}
                                    className="product"
                                />
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}
