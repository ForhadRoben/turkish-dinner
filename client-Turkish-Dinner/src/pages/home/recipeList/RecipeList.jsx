import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeList = ({ recipe }) => {
    console.log(recipe);
    const [favorite, setFavorite] = useState(true);
    const { recipe_image, recipe_name, ingredients, cooking_method, rating } = recipe;

    const handleFavorite = () => {
        toast("The food is absolutely amazing! The recipes are unique and delicious!");
        setFavorite(false);

    }
    return (
        <Col className='d-flex align-items-stretch'>
            <Card>
                <Card.Img variant="top" src={recipe_image} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{recipe_name}</Card.Title>
                </Card.Body>
                <div className='px-4'>
                    <p><span className='fw-semibold'>Cooking Method</span>: {cooking_method}</p>
                    <p><span className='fw-semibold'>Ingredients</span>:
                        {
                            ingredients.map((n, index) => <li key={index}>{n}</li>)
                        }
                    </p>
                    <p className='d-flex align-item-center'>
                        <span className='fw-semibold'>Ratings</span>:
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating || 0)} readOnly /> {rating}
                    </p>
                </div>

                <div className='d-flex'>
                    <Button onClick={handleFavorite} disabled={!favorite} variant="info" className=' flex-grow-1 rounded-0'><Link className='fw-semibold text-decoration-none text-light'>Add To Favorite</Link></Button>
                    <ToastContainer />
                </div>
            </Card>
        </Col>
    );
};

export default RecipeList;