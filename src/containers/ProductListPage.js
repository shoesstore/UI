import React, { Component } from 'react';
import ProductList from "../components/Product/ProductList";
import "../css/product/productlist.css";

export default class ProductListPage extends Component {

    render() {
        return(
            <div>
                <h4 style={{ textAlign: "center" }}>Products</h4>
                <div className="row col-md-12">
                    <div className="col-md-2 left-nav-wrapper">
                        Todo
                    </div>
                    <div className="col-md-10 product-grid">
                        <ProductList/>
                    </div>
                </div>
            </div>
        )
    }
}
