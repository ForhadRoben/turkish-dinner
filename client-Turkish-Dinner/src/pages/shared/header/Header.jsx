import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { NavLink } from 'react-router-dom';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to="/" className='fs-2 font text-decoration-none'><span className='text-info '>Turkish </span><span className='text-warning'>Dinner</span></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-start align-items-center text-decoration-none gap-4">
                            <NavLink
                                to='/'
                                aria-label='home'
                                title='Home'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/blogs'
                                aria-label='blogs'
                                title='Blogs'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blogs
                            </NavLink>

                            {user ? <>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip className='bg-secondary text-white' id={`tooltip-${placement}`}>
                                                {user?.displayName}
                                            </Tooltip>
                                        }
                                    >
                                        <img className='rounded-circle' style={{ height: "40px", width: "40px" }} src={user?.photoURL} alt="" />
                                    </OverlayTrigger>
                                ))}
                                <Button onClick={handleLogOut} variant="info" className='fw-semibold'>Logout</Button> </> :
                                <Link to="/login">
                                    <Button variant="info" className='fw-semibold'>Login</Button>
                                </Link>}
                            {/* {user ? <><img title={user.displayName} className='rounded-circle' style={{ hight: "40px", width: "40px" }} src={user.photoURL} alt="" />
                                <Button onClick={handleLogOut} variant="info" className='fw-semibold'>Logout</Button> </> :
                                <Link to="/login">
                                    <Button variant="info" className='fw-semibold'>Login</Button>
                                </Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;