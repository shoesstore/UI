import React, { Component }     from 'react';
import { Link }                 from "react-router-dom";
import StarRating               from "../components/StarRating/StarRating";
import { ButtonShoesStore }     from "../ui";


export default class ProductDetailPage extends Component {

    render() {

        const style = {
            height: 400,
            width: 300
        };

        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-12 col-sm-6 col-md-8 image-product">
                        <img style={ style } src={"https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/eaajqkkduhyrq5ngqldq/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"} alt="shoes1"/>
                        <img style={ style } src={"https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/zc5x1xceepbszkhwprvn/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"} alt="shoes1"/>
                        <img style={ style } src={"https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/xtmjyy2pncsrbwrusqqa/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"} alt="shoes1"/>
                        <img style={ style } src={"https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ytilupx8zriqu2fty3ln/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"} alt="shoes1"/>
                    </div>
                    <div className="col-6 col-md-4 info-product">
                        <div className="info-product">
                                <div className="info-product-name">
                                    <p>Men's Running Shoe</p> &nbsp;
                                    &nbsp; <p> 4.999.000$</p>
                                </div>
                                <div className="start-rating">
                                    <h2>Nike Joyride Run Flyknit</h2>
                                    <StarRating/>
                                </div>
                        </div>
                        <div>
                        <ButtonShoesStore
                            className="button-product"
                            color="secondary"
                            width={300}
                            height={50}
                            fontSize={20}
                            borderRadius={25}
                        >
                            <Link to="/cart">
                                Add to cart
                            </Link>
                        </ButtonShoesStore>
                        <ButtonShoesStore
                            className="button-product"
                            color="secondary"
                            width={300}
                            height={50}
                            fontSize={20}
                            borderRadius={25}
                        >
                            Favourite
                        </ButtonShoesStore>
                        </div>
                        <div className="description-preview"><p>The Nike Joyride Run
                            Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam
                            beads underfoot contour to your foot for cushioning that stands up to your mileage.</p>
                            <ul className="description-preview">
                                <li className="description-preview">Colour Shown:
                                    Black/White/Black
                                </li>
                                <li className="description-preview">Style: AQ2730-001</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
