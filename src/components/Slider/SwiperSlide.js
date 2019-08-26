import React, { Component } from 'react';
import Swiper               from 'react-id-swiper';
import './slide.css';

export default class SwiperSlide extends Component {
    render() {

        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }

        return (
            <div className="swiper-slide-home">
                <Swiper {...params}>
                    <div><img src={require('../../image/slide/banner0.jpg')} alt="img" /></div>
                    <div><img src={require('../../image/slide/banner1.jpg')} alt="img" /></div>
                    <div><img src={require('../../image/slide/banner2.jpg')} alt="img" /></div>
                    <div><img src={require('../../image/slide/banner3.jpg')} alt="img" /></div>
                    <div><img src={require('../../image/slide/banner4.jpg')} alt="img" /></div>
                </Swiper>
            </div>
        );
    }
}
