import React, { Component } from 'react';
import CardShoesStore       from "../../ui/card-shoestore";

export default class ProductList extends Component {

    render() {

        const products = [
            { img: require('../../image/carousel/carousel1.jpg'), name:"giay nike", price: 1000, description: "New Product!" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"giay bitis", price: 2000, description: "New Product!" },
            { img: require('../../image/carousel/carousel1.jpg'), name:"giay bitis", price: 3000, description: "New Product!" },
        ];

        return (
            <div>
                {
                    products.map((product, index) => {
                        return(
                            <div key={index}>
                                <CardShoesStore
                                    product={product}
                                    className="flex"
                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
