import React, { Component } from 'react';
import { Motion, spring }   from 'react-motion';
import                           '../../image/text/text.css';


export default class MotionText extends Component {

    render() {
        return (
            <div className="motion-text">
                <Motion defaultStyle={{ right: 20000 }} style={{ right: spring(100) }}>
                    {
                        value => (
                            <h3 style={{ paddingRight: 320, position: 'absolute', ...value }}>
                                LIST PRODUCT
                                <img
                                    width={60}
                                    height={60}
                                    src={require('../../image/cart/icon-cart.jpg')}
                                    alt="img"
                                />
                            </h3>
                        )
                    }
                </Motion>
            </div>
        );
    }
}

