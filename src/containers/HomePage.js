import React, { Component }     from 'react';
import { CarouselShoesStore }   from '../ui';
import ProductList              from "../components/Product/ProductList";
import                               '../css/carousel/carousel.css';


export default class HomePage extends Component {

    render() {

        const items = [
            { src: require('../image/carousel/carousel1.jpg'), altText: 'Slide 1', caption: 'Slide 1', header: 'Slide 1 Header' },
            { src: require('../image/carousel/carousel2.jpg'), altText: 'Slide 2', caption: 'Slide 2', header: 'Slide 2 Header' },
            { src: require('../image/carousel/carousel3.jpg'), altText: 'Slide 3', caption: 'Slide 3', header: 'Slide 3 Header' }
        ];


        return(
            <div>
                <div style={{ "padding-bottom": 100 }} >
                    <CarouselShoesStore
                        items={items}
                    />
                </div>
                <ProductList/>
            </div>
        );
    }
}
