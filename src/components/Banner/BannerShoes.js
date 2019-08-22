import React, { Component } from 'react';
import { ButtonShoesStore } from "../../ui";
import                           '../../css/banner/banner.css';


export default class BannerShoes extends Component {
    render() {
        return (
            <div className="shoes-for-women-and-men">
                <div className="shoes-for-women">
                    <p>Shoes for Women</p>
                    <div className="button-banner-women">
                        <ButtonShoesStore
                            color="secondary"
                            width={160}
                            height={50}
                            style={{ borderRadius: 15 }}
                        >
                            Shop
                        </ButtonShoesStore>
                    </div>
                </div>
                <div className="shoes-for-men">
                    <p>Shoes for Men</p>
                    <div className="button-banner-men">
                        <ButtonShoesStore
                            color="secondary"
                            width={160}
                            height={50}
                            style={{ borderRadius: 15 }}
                        >
                            Shop
                        </ButtonShoesStore>
                    </div>
                </div>
            </div>
        );
    }
}
