import React                    from 'react';
import { UncontrolledCarousel } from "reactstrap";


const CarouselShoesStore = (props) => {

    const { items } = props;

    return (
        <UncontrolledCarousel
            items={items}
        />
    );
}

export default CarouselShoesStore;
