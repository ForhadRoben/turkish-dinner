import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name, photo);
                console.log(createdUser);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })


        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('user name updated')
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    return (
        <Container className='w-50 mx-auto bg-secondary text-white p-5 m-4 '>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='rounded-0 ' type="text" name='name' placeholder="Enter your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='rounded-0 ' type="text" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='rounded-0 ' type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='rounded-0 ' type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>

                <Button className='rounded-0 ' variant="info" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-white mt-2 fw-semibold">
                    Already Have an Account? <Link to="/login" className='text-warning '>Login</Link>

                </Form.Text>

                <div className='mt-4'>
                    <Form.Text className="text-light fs-3">
                        {success}
                    </Form.Text>
                    <Form.Text className="text-light fs-3">
                        {error}
                    </Form.Text>
                </div>
            </Form>
        </Container>
    );
};

export default Register;