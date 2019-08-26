import React, { Component }     from 'react';

import StarRating               from "../components/StarRating/StarRating";
import { ButtonShoesStore }     from "../ui";

export default class ProductDetailPage extends Component {
    render() {

        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-12 col-sm-6 col-md-8 image-product">
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-1.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-0.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1-2.jpg")} alt="shoes1"/>
                        <img style={{ height: 400,width:300 }} src={require("../image/product/shoe1.jpg")} alt="shoes1"/>
                    </div>
                    <div className="col-6 col-md-4 info-product">
                        <div className="info-product">
                            <div>
                                <div className="info-product-name col-sm">
                                    Men's Running Shoe
                                    <h2>Nike Joyride Run Flyknit</h2>
                                    <StarRating/>
                                </div>
                                <div className="col-sm">
                                    4.999.000 VND
                                </div>
                            </div>
                        </div>
                        <div>
                        <ButtonShoesStore
                            className="button-buy"
                            color="secondary"
                            width={200}
                            height={50}
                            fontSize={20}
                            borderRadius={25}
                        >
                            Add to cart
                        </ButtonShoesStore>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}