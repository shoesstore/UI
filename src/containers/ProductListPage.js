import React, { Component }                           from 'react';
import ProductList                                    from "../components/Product/ProductList";
import Collapses                                      from "../components/Collapse/Collapse";
import MotionText                                     from "../components/Text/MotionText";
import Pagin                                          from "../components/Pagin/Pagin";
import                                                     "../css/product/productlist.css";


export default class ProductListPage extends Component {

    render() {
        return(
            <div className="container-fluid">
                <MotionText/>
                <div className="row col-md-12">
                    <div className="col-md-2 left-nav-wrapper">
                        <Collapses/>
                    </div>
                    <div className="col-md-10 product-grid">
                        <ProductList/>
                        <Pagin/>
                    </div>
                </div>
            </div>
        )
    }
}
