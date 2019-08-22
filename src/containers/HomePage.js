import React, { Component }     from 'react';
import Carousel                 from "../components/Carousel/Carousel";
import ProductList              from "../components/Product/ProductList";
import BannerAdvertisement      from "../components/BannerAdvertisement/BannerAdvertisement";
import                               '../css/carousel/carousel.css';


export default class HomePage extends Component {

    render() {
        return(
            <div>
                <Carousel/>
                <ProductList/>
                <BannerAdvertisement/>
            </div>
        );
    }
}
