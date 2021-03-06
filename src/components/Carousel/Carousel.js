import React, { Component }   from 'react';
import { CarouselShoesStore } from "../../ui";


export default class Carousel extends Component {

    render() {

        const items = [
            { src: require('../../image/gif/Advertisement.gif'), altText: 'Slide 0', caption: 'ShoesStore', header: 'Breakthrough' },
            { src: require('../../image/carousel/1.jpg'), altText: 'Slice 1', caption: 'ShoesStore', header: 'Explosion Collection' },
            { src: require('../../image/carousel/2.jpg'), altText: 'Slice 2', caption: 'ShoesStore', header: 'Neon Collection' },
            { src: require('../../image/carousel/3.jpg'), altText: 'Slice 3', caption: 'ShoesStore', header: 'Fire Collection' },
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
