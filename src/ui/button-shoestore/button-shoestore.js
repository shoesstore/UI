import React      from 'react';
import { Button } from 'reactstrap';


const ButtonShoeStore = (props) => {

    const { color, width, height } = props;

    return (
        <Button
            color={color}
            style={{ width, height }}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default ButtonShoeStore;
