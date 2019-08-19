import React, { Component } from 'react';
import { Button }           from 'reactstrap';


export default class Buttons extends Component {

    showBeTienDuy() {
        alert('Em là Tiến Duy này!!!');
    }


    render() {
        return(
            <Button onClick={ () => this.showBeTienDuy() } color="primary">Click vào em này</Button>
        );
    }
}
