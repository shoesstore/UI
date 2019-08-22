import React, { Component } from 'react';
import ProductList from "../components/Product/ProductList";

export default class ProductListPage extends Component {
    render() {
        return(
            <div className="row container-fluid">
                <ProductList/>
            </div>
        )
    }
}