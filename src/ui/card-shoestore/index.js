import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const CardShoesStore = (props) => {

    const { width, product } = props;

    return(
        <div>
            <Card>
                <CardImg top width={width} src={product.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.price}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardShoesStore;