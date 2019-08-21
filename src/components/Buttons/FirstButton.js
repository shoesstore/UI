import React, { Component } from 'react';
import Index      from "../../ui/button-shoestore";


export default class FirstButton extends Component {

    render() {

        const style = {
            "padding-top"    : 100,
            "padding-left"   : 500,
            "padding-bottom" : 100,
            "font-family"    : "sanserif"
        };

        return(
            <div style={style}>
                <Index
                    color="danger"
                    width={300}
                    height={100}
                >
                    BUTTON
                </Index>
            </div>
        );
    }
}
