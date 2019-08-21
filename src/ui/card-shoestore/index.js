import React                                                          from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText }  from 'reactstrap';


const CardShoesStore = (props) => {

    const { height, width, className, product } = props;

    return(
        <div className={ className }>
            <Card style={{ height, width }}>
                <CardImg src={product.img} alt="image" />
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
