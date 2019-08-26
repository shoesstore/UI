import React, { Component }      from 'react';
import { MotionTextShoesStore }  from "../../ui";
import                                "./motion.css"


export default class MotionTextCartPage extends Component {
    render() {
        return (
            <div>
                <MotionTextShoesStore
                    src={require('../../image/cart/shopping-cart-icon.png')}
                    title="CART"
                    alt="img"
                    className="classIconCartPage classIconCPage"
                    isCartPage={true}
                />
            </div>
        );
    }
}

