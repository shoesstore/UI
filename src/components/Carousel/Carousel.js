import React, { Component }   from 'react';
import { CarouselShoesStore } from "../../ui";


export default class Carousel extends Component {

    render() {

        const items = [
            { src: require('../../image/carousel/1.jpg'), altText: 'Slide 1', caption: 'Slide 1', header: 'Slide 1 Header' },
            { src: require('../../image/carousel/2.jpg'), altText: 'Slide 2', caption: 'Slide 2', header: 'Slide 2 Header' },
            { src: require('../../image/carousel/3.jpg'), altText: 'Slide 3', caption: 'Slide 3', header: 'Slide 3 Header' },
        ];

        return (
            <div style={{ paddingBottom: 50 }}>
                <CarouselShoesStore
                    items={items}
                />
            </div>
        );
    }
}
