import React                                   from 'react';
import { Card, CardBody, CardImg, CardTitle }  from "reactstrap";
import { ButtonShoesStore }                    from "../../ui";
import                                              '../../css/product/product.css';

const Product = (props) => {

    const { height, width, className, product } = props;

    return(
        <div className={ className }>
            <Card style={{ height, width }}>
                <CardImg src={product.img} alt="image" />
                <CardBody>
                    <div className="name-price">
                        <CardTitle><strong>{product.name}</strong></CardTitle>
                        <CardTitle>{product.price} $</CardTitle>
                    </div>
                    <div>
                        <img className="image-new-product" src={require('../../image/product/new-product2.png')} alt="image-new-product"/>
                    </div>
                </CardBody>
                <div className="button-product">
                    <div>
                        <ButtonShoesStore
                            color="danger"
                            width={120}
                            height={30}
                            fontSize={10}
                            borderRadius="25px"
                        >
                            Quick Review
                        </ButtonShoesStore>
                    </div>
                    <div>
                        <ButtonShoesStore
                            color="success"
                            width={120}
                            height={30}
                            fontSize={10}
                            borderRadius="25px"
                        >
                            Add To Cart
                        </ButtonShoesStore>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Product;

