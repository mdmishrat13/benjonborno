import React from 'react';
import { Card } from 'react-bootstrap';
import './testemoni.css'

const Testemoni = (props) => {
    const { name, comment, img } = props.comment;
    return (
        <div className="container">
            <div className="my-5">
                <Card>
                    <div className="card-image">
                        <img src={img} alt="" />
                    </div>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {comment}
                            </p>
                            <footer className="blockquote-footer">
                                Said by <cite title="Source Title">{name}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Testemoni;