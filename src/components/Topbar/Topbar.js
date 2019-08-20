import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
    render() {

        return (
            <div className="topbar">
                <div className="container">
                    <Container>
                        <Row>
                            <Col xs="6" sm="4">Join / log in to Account </Col>
                            <Col xs="6" sm="4"></Col>

                            <Col sm="4">Help</Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}