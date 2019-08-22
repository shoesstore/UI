import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom';
import HomePage             from './containers/HomePage';
import ProductListPage      from "./containers/ProductListPage";

export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/collections" component={ProductListPage}/>
            </Switch>
        )
    }
}
