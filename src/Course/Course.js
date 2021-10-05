import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./course.css"

const Course = (props) => {
    const { name, price, img, duration } = props.cor;
    return (
        <div className="single-card">
            <Col >
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Fees: {price} taka</p>
                            <p>Duration {duration} month</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Course;