import React, { Component }     from 'react';
import Carousel                 from "../components/Carousel/Carousel";
import ProductList              from "../components/Product/ProductList";
import BannerShoes                   from "../components/Banner/BannerShoes";
import                               '../css/carousel/carousel.css';
import BannerAdvertisement from "../components/Banner/BannerAdvertisement";


export default class HomePage extends Component {

    render() {
        return(
            <div>
                <Carousel/>
                <BannerShoes/>
                <BannerAdvertisement/>
                <ProductList/>
            </div>
        );
    }
}
