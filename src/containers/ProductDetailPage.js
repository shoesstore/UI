import React, { Component }     from 'react';

export default class ProductDetailPage extends Component {
    render() {

        return (
            <div className="container">
                <div className="row-img-product">
                    <div className="column">
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-1.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-0.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-2.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1.jpg")} alt="shoes1"/>
                    </div>
                    <div className="col-5">
                        <div className="col">
                            Men's Running Shoe
                        </div>
                        <div className="col">
                            4.999.000$
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}