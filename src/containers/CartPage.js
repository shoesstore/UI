import React, { Component }    from 'react';
import MotionTextCartPage      from "../components/Text/MotionTextCartPage";
import CartTable               from "../components/Cart/CartTable";
import { BreadCrumbShoeStore } from "../ui";
import                              '../components/Cart/cart.css';


export default class CartPage extends Component {
    render() {
        return (
            <div>
                <BreadCrumbShoeStore page="Cart"/>
                <MotionTextCartPage/>
                <CartTable/>
            </div>
        );
    }
}
