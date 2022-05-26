import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, price, minimum } = service;
    const Navigate = useNavigate();

    const NavigatePService = id => {
        Navigate(`/service/${id}`);
    }
    return (
        <div class="card w-96 bg-base-200 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{minimum.length} products </p>
                <p className='text-justify'>{description}</p>
                <p>Price: {price} </p>
                <div class="card-actions">
                    <button onClick={() => NavigatePService(id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;