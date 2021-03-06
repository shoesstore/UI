import React, { Component }         from 'react';
import ProductList                  from "../components/Product/ProductList";
import Collapses                    from "../components/Collapse/Collapse";
import MotionTextProductListPage    from "../components/Text/MotionTextProductListPage";
import Pagin                        from "../components/Pagin/Pagin";
import { BreadCrumbShoeStore }      from "../ui";
import                                   "../components/Product/productlist.css";


export default class ProductListPage extends Component {

    render() {
        return(
            <div className="container-fluid">
                <BreadCrumbShoeStore page="Collections"/>
                <MotionTextProductListPage/>
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
