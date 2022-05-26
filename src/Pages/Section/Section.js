import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Section = () => {
    const { Serviceid } = useParams();
    return (
        <div>
            <h2></h2>
            <div className='hero min-h-screen text-justify bg-base-200 text-2xl font-bold text-center'>
                <Link to="/purchase">
                    <button className="btn btn-danger">Purchase</button>
                </Link>
            </div>
        </div>
    );
};

export default Section;