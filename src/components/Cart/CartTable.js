import React, { Component } from 'react';
import { Table }            from 'reactstrap';
import ProductInCartTable   from './ProductInCartTable';
import                           '../../css/cart/cart.css';


export default class CartTable extends Component {

    render() {

        const products = [
            { id: 1, image: require('../../image/product/shoe1.jpg'), name: "Nike Joyride Run Flyknit", price: 100, quantity: 1, total: 100 },
            { id: 2, image: require('../../image/product/shoe1.jpg'), name: "Nike Joyride Run Flyknit", price: 100, quantity: 1, total: 100 },
        ]

        return (
            <div className="cart-table">
                <Table>
                    <thead>
                    <tr>
                        <th><center><strong>...</strong></center></th>
                        <th><center><strong>Product</strong></center></th>
                        <th><center><strong>Price</strong></center></th>
                        <th><center><strong>Quantity</strong></center></th>
                        <th><center><strong>Total</strong></center></th>
                        <th><center><strong></strong></center></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product, index) =>
                            <ProductInCartTable
                                key={index}
                                product={product}
                            />
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}
