import React, { Component }   from 'react';
import { CarouselShoesStore } from "../../ui";


export default class Carousel extends Component {

    render() {

        const items = [
            { src: require('../../image/gif/Advertisement.gif'), altText: 'Slide 0', caption: 'Slide 0', header: 'Slide 0 Header' },
            { src: require('../../image/carousel/1.jpg'), altText: 'Slice 1', caption: 'Slide 1', header: 'Slide 1 Header' },
            { src: require('../../image/carousel/2.jpg'), altText: 'Slice 2', caption: 'Slide 2', header: 'Slide 2 Header' },
            { src: require('../../image/carousel/3.jpg'), altText: 'Slice 3', caption: 'Slide 3', header: 'Slide 3 Header' },
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
