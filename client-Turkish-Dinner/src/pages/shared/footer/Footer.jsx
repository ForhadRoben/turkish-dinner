import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="mt-5 bg-light p-5">
                <div className="container">
                    <div className="row">
                        <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-3 text-center ">
                            <Navbar.Brand href="#home" className='font'><span className='text-info '>Turkish </span><span className='text-warning'>Dinner</span></Navbar.Brand>
                            <p className="text-dark mt-2">A favorite place where we order food, a favorite place where we drink coffee or a place we go to almost every time whenever we want to hang out. It’s easy to find these favorite places.</p>
                        </div>
                        <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-3 text-center text-dark">
                            <h4 className="mb-2">Useful Links</h4>
                            <p><Nav.Link href="#features">Home</Nav.Link></p>
                            <p><Nav.Link href="#pricing">Blogs</Nav.Link></p>
                            <p><Nav.Link href="/contact">Contact Us</Nav.Link></p>

                        </div>
                        <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-3 text-center text-dark">
                            <h4 className="mb-3">Contact Us</h4>
                            <p>+88 01750 000 000<br /></p>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-3 text-center text-dark">
                            <h4 className="mb-3">Subscribe</h4>
                            <p>Subscribe for our latest Articles. We Won’t Give You Spam Mails</p>
                            <div className=" mb-3">
                                <input type="text" className="form-control" placeholder="Email address"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-dark">
                    <p>&copy; All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;