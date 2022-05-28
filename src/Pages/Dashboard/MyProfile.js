import React from 'react';

const MyProfile = () => {
    return (
        <div className='mt-3 '>
            <h3 className='mb-3'>My Profile</h3>
            <div className='mb-3'>
                <input type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder="Education" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder="City" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className='mb-3'>
                <input type="text" placeholder="Phone" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <button class="btn w-full max-w-xs">Submit</button>

        </div>
    );
};

export default MyProfile;