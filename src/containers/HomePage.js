import React, { Component }  from 'react';
import { BrowserRouter }     from "react-router-dom";
import CarouselShoesStore    from "../ui/carousel-shoestore/carousel-shoestore";
import                            '../css/carousel/carousel.css';

export default class HomePage extends Component {

    render() {

        const items = [
            { src: require('../image/carousel/carousel1.jpg'), altText: 'Slide 1', caption: 'Slide 1', header: 'Slide 1 Header' },
            { src: require('../image/carousel/carousel2.jpg'), altText: 'Slide 2', caption: 'Slide 2', header: 'Slide 2 Header' },
            { src: require('../image/carousel/carousel3.jpg'), altText: 'Slide 3', caption: 'Slide 3', header: 'Slide 3 Header' }
        ];

        const style = {
            "padding-bottom" : 100,
        }

        return(
            <BrowserRouter>
                <div style={style}>
                    <CarouselShoesStore
                        items={items}
                    />
                </div>
            </BrowserRouter>

        );
    }
}
