import React, { Component } from 'react';
import MotionTextCartPage   from "../components/Text/MotionTextCartPage";
import CartTable            from "../components/Cart/CartTable";
import                           '../css/cart/cart.css';


export default class CartPage extends Component {
    render() {
        return (
            <div>
                <MotionTextCartPage/>
                <CartTable/>
            </div>
        );
    }
}
