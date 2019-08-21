import React, { Component } from 'react';
import Index      from "../../ui/button-shoestore";

export default class SecondButton extends Component {
    render() {

        const style = {
            "padding-left"   : 500,
            "padding-bottom" : 100,
        };

        return (
            <div style={style}>
                <Index
                    color="success"
                    width={600}
                    height={100}
                >
                    BUTTON
                </Index>
            </div>
        );
    }
}
