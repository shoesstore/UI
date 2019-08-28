import React, { Component } from 'react';


export default class ProductInCartTable extends Component {

    render() {

        const { product } = this.props;

        return (
            <tr>
                <th className="img-product" scope="row">
                    <center>
                        <img src={product.image} style={{ height: 200, width: 200 }} alt="img" />
                    </center>
                </th>
                <td><center><strong>{product.name}</strong></center></td>
                <td><center><strong>{product.price}</strong></center></td>
                <td><center><strong>{product.quantity}</strong></center></td>
                <td><center><strong>{product.price * product.quantity} </strong></center></td>
                <td>
                    <center>
                        <img src={require('../../image/button/delete-product.png')} alt="delete-product" />
                    </center>
                </td>
            </tr>
        );
    }
}
