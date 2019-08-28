import React, { Component } from 'react';
import Product              from './Product';


export default class ProductList extends Component {

    state = {
        cart: []
    };


    addProduct() {
        const product = [ ...this.state.cart ];

        const newProduct = product.push(product);

        this.setState({
            cart: newProduct
        });

        console.log(newProduct);
    };


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
                                        addProduct={ () => this.addProduct() }
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
