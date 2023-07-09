import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefsDetails = ({ chefInfo }) => {
    // console.log(chefInfo);
    const { _id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chefInfo;

    return (

        <Col>
            <Card>
                <LazyLoad >
                    <Card.Img variant="top" src={chef_picture} />
                </LazyLoad>

                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <div>
                        <p><span className='fw-semibold'>Year Of Experience</span>: {years_of_experience}</p>
                        <p><span className='fw-semibold'>Number Of Recipes</span>: {number_of_recipes}</p>
                        <p><span className='fw-semibold'>Total Likes</span>: {likes}</p>
                    </div>
                </Card.Body>
                <div className='d-flex '>
                    <Button variant="outline-info" className=' flex-grow-1 rounded-0'><Link to={`/chefInfo/${_id}`} className='fw-semibold text-decoration-none'>View Recipes</Link></Button>
                </div>
            </Card>
        </Col>
    );
};

export default ChefsDetails;