import React, { Component } from 'react';
import Product              from './Product';
import propTypes            from 'prop-types';


export default class ProductList extends Component {

    state = {
        cart: []
    };


    addProduct() {
        const product = [ ...this.props.product];

        const newProduct = product.push(product);

        this.setState({
            cart: newProduct
        });

        console.log(newProduct);
    };


    render() {

        const { products } = this.props;

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
                                        addProduct={ (product) => this.addProduct(product) }
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

ProductList.propTypes = {
    products: propTypes.object
};

ProductList.defaultProps = {
    products: [
        { id: 1, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 2, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 3, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 4, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 5, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 6, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 7, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
        { id: 8, img: require('../../image/carousel/carousel1.jpg'), name:"Nike Joyride Run Flyknit", price: 1000, quantity: 1, total: 100 },
    ]
};
