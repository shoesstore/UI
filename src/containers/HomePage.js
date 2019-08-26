import React, { Component }     from 'react';
import Carousel                 from "../components/Carousel/Carousel";
import ProductList              from "../components/Product/ProductList";
import BannerShoes              from "../components/Banner/BannerShoes";
import BannerAdvertisement      from "../components/Banner/BannerAdvertisement";
import '../components/Carousel/carousel.css';
import                               '../css/product/product.css';


export default class HomePage extends Component {

    render() {
        return(
            <div>
                <Carousel/>
                <BannerShoes/>
                <BannerAdvertisement/>
                <div className="name-list-product">LIST PRODUCT</div>
                <ProductList/>
            </div>
        );
    }
}
