import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, price, img, minimum } = service;
    const Navigate = useNavigate();

    const NavigatePService = id => {
        Navigate(`/service/${id}`);
    }
    const [quantity, setQuantity] = useState(5);

    const handleDecrement = () => {
        if (quantity > 5) {
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        if (quantity < 30) {
            setQuantity(prevCount => prevCount + 1);
        }
    }

    return (
        <div class="card w-80 bg-base-200 shadow-xl mt-12 mb-12">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <img className='w-60' src={img} alt="" />
                <p>{minimum.length} Products Available </p>
                <p className='text-justify'>{description}</p>
                <p>Price: {price} </p>
                <p>Minimum : 5, Maximum: 30</p>

                <div className='input-group'>
                    <button type="button" onClick={handleDecrement} className='btn mt-6'>-</button>
                    <div>{quantity}<input type="text" placeholder="" class="input w-48" /></div>

                    <button type="button" onClick={handleIncrement} className='btn mt-6'>+</button>

                </div>
                <div class="card-actions">
                    <button onClick={() => NavigatePService(id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;