import React from 'react';
import Header from '../pages/shared/header/header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/shared/footer/Footer';

const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default RecipesLayout;