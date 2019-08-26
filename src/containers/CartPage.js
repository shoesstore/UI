import React, { Component } from 'react';
import MotionTextCartPage   from "../components/Text/MotionTextCartPage";
import CartTable            from "../components/Cart/CartTable";
import '../components/Cart/cart.css';


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
