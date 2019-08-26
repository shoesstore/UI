import React, { Component }      from 'react';
import { MotionTextShoesStore }  from "../../ui";


export default class MotionTextCartPage extends Component {
    render() {
        return (
            <div style={{ paddingTop: 15 }}>
                <MotionTextShoesStore
                    src={require('../../image/cart/shopping-cart-icon.png')}
                    title="CART"
                    alt="img"
                />
            </div>
        );
    }
}

