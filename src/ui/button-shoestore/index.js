import React      from 'react';
import { Button } from 'reactstrap';


const ButtonShoesStore = (props) => {

    const { color, width, height, fontSize, borderRadius } = props;

    return (
        <Button
            color={color}
            style={{ width, height, fontSize, borderRadius }}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default ButtonShoesStore;
