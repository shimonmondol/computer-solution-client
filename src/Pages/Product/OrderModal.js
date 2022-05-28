import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const OrderModal = ({ details, setDetails }) => {
    const { _id, name, minimum } = details;
    const [user, loading, errors] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        const minimum = event.target.minimum.value;

        const order = {
            detailsId: _id,
            details: name,
            minimum,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'context-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                setDetails(null);
            })
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Order for {name}</h3>
                    <from className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" class="btn btn-primary w-full max-w-xs" />
                    </from>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;