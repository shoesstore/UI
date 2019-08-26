import React                                   from 'react';
import { Link }                                from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle }  from "reactstrap";
import { ButtonShoesStore }                    from "../../ui";
import                                              './product.css';


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
                        <img className="image-new-product" src={require('../../image/product/new-product2.png')} alt="img-new-product"/>
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
                            <Link to="/product">
                                Quick Review
                            </Link>
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
                            <Link to="/cart">
                                Add To Cart
                            </Link>
                        </ButtonShoesStore>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Product;
