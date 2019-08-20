import React, { Component } from 'react';
import ButtonShoeStore      from "../../ui/button-shoestore/button-shoestore";

export default class SecondButton extends Component {
    render() {

        const style = {
            "padding-left"   : 500,
            "padding-bottom" : 100,
        };

        return (
            <div style={style}>
                <ButtonShoeStore
                    color="success"
                    width={600}
                    height={100}
                >
                    BUTTON
                </ButtonShoeStore>
            </div>
        );
    }
}
