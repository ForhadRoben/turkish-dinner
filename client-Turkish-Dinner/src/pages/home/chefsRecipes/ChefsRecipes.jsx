import React from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeList from '../recipeList/RecipeList';

const ChefsRecipes = () => {
    // const { id } = useParams();
    const viewRecipes = useLoaderData();
    console.log(viewRecipes);
    const { _id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes, description, recipes } = viewRecipes;
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={chef_picture} />
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='fw-bold'>{chef_name}</Card.Title>
                    </Card.Body>
                    <div className='px-4'>
                        <p>{description}</p>
                        <p><span className='fw-semibold'>Year Of Experience</span>: {years_of_experience}</p>
                        <p><span className='fw-semibold'>Number Of Recipes</span>: {number_of_recipes}</p>
                        <p><span className='fw-semibold'>Total Likes</span>: {likes}</p>
                    </div>

                </Card>
            </CardGroup>

            <Row xs={1} md={3} className="g-4 mt-4 ">
                {
                    recipes.map((recipe, index) => <RecipeList
                        key={index}
                        recipe={recipe}>

                    </RecipeList>)
                }
            </Row>

        </div>
    );
};

export default ChefsRecipes;