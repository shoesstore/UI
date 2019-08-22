import React, { Component }     from 'react';
import Carousel                 from "../components/Carousel/Carousel";
import ProductList              from "../components/Product/ProductList";
import Banner                   from "../components/Banner/Banner";
import                               '../css/carousel/carousel.css';


export default class HomePage extends Component {

    render() {
        return(
            <div>
                <Carousel/>
                <ProductList/>
                <Banner/>
            </div>
        );
    }
}
