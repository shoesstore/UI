import React, { Component } from 'react';
import Product              from './Product';


export default class ProductList extends Component {

    render() {

        const products = [
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
            { img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000 },
        ];


        return (
            <div>
                <div className="row container-fluid">
                    {
                        products.map((product, index) => {
                            return(
                                <div>
                                    <Product
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
            </div>
        );
    }
}
