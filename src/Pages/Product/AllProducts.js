import React from 'react';
import { useState, useEffect } from 'react';
import Service from './Service';

const AllProducts = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="hero min-h-screen text-justify bg-base-300">
            <h4 className='text-xl text-center'></h4>
            <div className='grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllProducts;