import React, { Component } from 'react';
import                            '../css/carousel/carousel.css';
import {CardShoesStore,
        CarouselShoesStore} from '../ui';

export default class HomePage extends Component {

    render() {

        const items = [
            { src: require('../image/carousel/carousel1.jpg'), altText: 'Slide 1', caption: 'Slide 1', header: 'Slide 1 Header' },
            { src: require('../image/carousel/carousel2.jpg'), altText: 'Slide 2', caption: 'Slide 2', header: 'Slide 2 Header' },
            { src: require('../image/carousel/carousel3.jpg'), altText: 'Slide 3', caption: 'Slide 3', header: 'Slide 3 Header' }
        ];

        const style = {
            "padding-bottom" : 100,
        };

        const products = [
            {
                img: require('../image/carousel/carousel1.jpg'),
                name:"giay nike",
                price: 1000,
                description: "New Product!"
            },
            {
                img: require('../image/carousel/carousel1.jpg'),
                name:"giay bitis",
                price: 2000,
                description: "New Product!"
            },
            {
                img: require('../image/carousel/carousel1.jpg'),
                name:"giay bitis",
                price: 3000,
                description: "New Product!"
            },
        ];

        return(
            <div>
                <div style={style}>
                    <CarouselShoesStore
                        items={items}
                    />
                </div>
                <div>
                    {
                        products.map((product, index) => {
                            return(
                                <div key={index}>
                                    <CardShoesStore
                                        width="10"
                                        product={product}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
