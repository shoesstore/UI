import React from 'react';
import {Button} from 'reactstrap';

const ButtonShoeStore = (props) => {
    const {
        color
    } = props;

    return (
        <Button color={color} {...props}>
            {props.children}
        </Button>
    )
}

export default ButtonShoeStore
