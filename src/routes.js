import React, { Component }             from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage                         from "./containers/HomePage";
import ProductListPage                  from "./containers/ProductListPage";
import ProductDetailPage                from "./containers/ProductDetailPage";
import CartPage                         from "./containers/CartPage";
import NotFoundPage                     from "./components/NotFoundPage/NotFoundPage";


export default class RouterProtect extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"               component={HomePage}         />
                    <Route exact path="/collections"    component={ProductListPage}  />
                    <Route exact path="/product/:id"    component={ProductDetailPage}/>
                    <Route exact path="/cart"           component={CartPage}         />
                    <Route       path="*"               component={NotFoundPage}     />
                </Switch>
            </BrowserRouter>
        )
    }
}
