import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom';
import HomePage             from './containers/HomePage';

export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        )
    }
}
