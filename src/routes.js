import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage             from './containers/HomePage';
import ProductListPage      from "./containers/ProductListPage";
import ProductDetailPage    from "./containers/ProductDetailPage";
import CartPage             from "./containers/CartPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"            component={HomePage}         />
                <Route       path="*"            component={NotFoundPage}     />
                <Route       path="/404"         component={NotFoundPage}     />
                <Redirect    to  ="/404"                                        />
                <Route exact path="/collections" component={ProductListPage}  />
                <Route exact path="/product"     component={ProductDetailPage}/>
                <Route exact path="/cart"        component={CartPage}         />
            </Switch>
        )
    }
}
