import React, { Component } from 'react';
import { Motion, spring }   from 'react-motion';
import '../../css/text/text.css';


export default class MotionText extends Component {

    render() {
        return (
            <div className="motion-text">
                <Motion defaultStyle={{ right: 20000 }} style={{ right: spring(100) }}>
                    {
                        value => (
                            <h3 style={{ display: "flex", paddingRight: 710, position: 'absolute', ...value }}>
                                <img
                                    style={{ width: 40, height: 40, paddingRight: 10 }}
                                    src={require('../../image/product/listing-option.png')}
                                    alt="img"
                                />
                                <div className="title-list-product">
                                    LIST PRODUCT
                                </div>
                            </h3>
                        )
                    }
                </Motion>
            </div>
        );
    }
}

