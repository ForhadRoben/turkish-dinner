import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/Beef-Tacos.jpg'
import img2 from '../../../assets/Grilled Steak.jpg'
import img3 from '../../../assets/grilled-chicken-salad.jpg'

const Slideshow = () => {
    return (
        <div>
            <h4 className='fw-bold text-center'>Editor's Pick Recipe</h4>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Beef Tacos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Grilled Steak</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>grilled chicken salad</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slideshow;