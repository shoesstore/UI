import React, { Component } from 'react';
import Product              from './Product';
import propTypes            from 'prop-types';


export default class ProductList extends Component {

    state = {
        cart: []
    };


    addProduct() {
        const { products } = this.props;
        const newCart = products.find(product => product.id !== product);
        this.setState({
            cart: newCart
        });
    };s


    render() {

        const { products } = this.props;

        return (
            <div>
                <div className="row container-fluid">
                    {
                        products.map((product) => {
                            return(
                                <div key={product.id}>
                                    <Product
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
    products: propTypes.object,
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
    ],
};
