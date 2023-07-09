import React from 'react';

const Testimonials = () => {
    return (
        <div className=' m-3'>
            <p className='text-center fw-bold'>Testimonials</p>
            <h4 className='fw-bold text-center'>We Love Our Customers</h4>
            <div className='d-flex flex-column'>
                <div className='py-2'>
                    <p className='fst-italic'>"The food is absolutely amazing! The recipes are unique and delicious, and every dish is made with fresh and high-quality ingredients. I highly recommend trying their signature dish!"</p>
                    <p className='text-danger m-0 p-0'>Tony Doe</p>
                    <p ><small>Food Blogger</small></p>
                </div>
                <div>
                    <p className='fst-italic'>"I had the pleasure of dining at this restaurant and was blown away by the flavors in their dishes. The chef really knows how to create complex and well-balanced flavors in their recipes. I can't wait to come back and try more!"</p>
                    <p className='text-danger m-0 p-0'>Jessica Feb</p>
                    <p><small>Mother</small></p>
                </div>
                <div>
                    <p className='fst-italic'>"I am a picky eater, but this recipe exceeded my expectations. Their recipes are simple yet flavorful, and everything tasted incredibly fresh. I will definitely be back!"</p>
                    <p className='text-danger m-0 p-0'>Aman Yousuf</p>
                    <p><small>Teacher</small></p>
                </div>
                <div>
                    <p className='fst-italic'>"I am a big foodie and have tried many recipes, but this one has become my favorite. Their recipes are unique and creative, and they always surprise me with new dishes. Every time I come here, I am blown away by the quality of the food."</p>
                    <p className='text-danger m-0 p-0'>Isaq Omarzai</p>
                    <p><small>Athlete</small></p>
                </div>


            </div>

        </div>
    );
};

export default Testimonials;