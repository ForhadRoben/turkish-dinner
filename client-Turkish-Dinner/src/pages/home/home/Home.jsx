import React, { useEffect, useState } from 'react';
import ChefsDetails from '../chefsDetails/ChefsDetails';
import { Row } from 'react-bootstrap';


const Home = () => {
    const [chefsInfo, setChefsInfo] = useState([]);

    useEffect(() => {
        fetch('https://server-turkish-dinner-forhadroben.vercel.app/chefsInfo')
            .then(res => res.json())
            .then(data => {
                setChefsInfo(data)
            })
            .catch(error => console.error(error))
    }, [])



    return (
        <div>

            <h4 className='fw-bold text-center'>Chefs Lists</h4>
            <Row xs={1} md={2} className="g-4">
                {
                    chefsInfo.map(chefInfo => <ChefsDetails
                        key={chefInfo._id}
                        chefInfo={chefInfo}
                    >
                    </ChefsDetails>)
                }
            </Row>

        </div>
    );
};

export default Home;