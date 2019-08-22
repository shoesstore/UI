import React, { Component } from 'react';
import '../../css/banner/banner.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="shoes-for-women-and-men">
                <div className="shoes-for-women">
                    Shoes for women
                </div>
                <div className="shoes-for-men">
                    Shoes for men
                </div>
            </div>
        );
    }
}
