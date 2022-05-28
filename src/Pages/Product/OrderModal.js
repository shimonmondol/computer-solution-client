import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Button } from 'bootstrap';

const OrderModal = ({ details, setDetails }) => {
    const { _id, name } = details;
    const [user, loading, errors] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            detailsId: _id,
            customerName: user.displayName,
            customer: user.email,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Order Done now`)
                }
                else {
                    toast.error(`Not Done Yet`)
                }
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
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;