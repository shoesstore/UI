import React                                                          from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


const CardShoesStore = (props) => {

    const { className, product } = props;

    return(
        <div className={ className }>
            <Card style={{ height: 300, width: 300 }}>
                <CardImg src={product.img} alt="Card image cap" />
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
