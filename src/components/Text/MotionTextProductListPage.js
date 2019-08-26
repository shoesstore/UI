import React, { Component }      from 'react';
import { MotionTextShoesStore }  from "../../ui";


export default class MotionTextProductListPage extends Component {
    render() {
        return (
            <div>
                <MotionTextShoesStore
                    src={require('../../image/product/listing-option.png')}
                    title="LIST PRODUCT"
                    alt="img"
                    style={{ width: 40, height: 40, paddingRight: 10 }}
                />
            </div>
        );
    }
}

