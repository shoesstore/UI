import React, { Component }      from 'react';
import { MotionTextShoesStore }  from "../../ui";
import                                './motion.css';


export default class MotionTextProductListPage extends Component {
    render() {
        return (
            <div>
                <MotionTextShoesStore
                    src={require('../../image/product/listing-option.png')}
                    title="LIST PRODUCT"
                    alt="img"
                    className="classIconProductListPage classIconPLPage"
                    isCartPage={false}
                />
            </div>
        );
    }
}

