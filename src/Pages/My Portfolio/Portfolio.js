import React from 'react';

const Portfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row mb-32">
                <img src="https://i.ibb.co/9TVCw9f/Shimon-Mondol.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div className="mx-3 mt-1 text-2xl font-bold">
                    <h1>Name : Shimon Kumar Mondol</h1>
                    <h1 className='mt-3'>Email : Shimonuap072@gmail.com</h1>
                    <h1 className='mt-3'>Education : B.Sc in EEE</h1>
                    <h1 className='mt-3'>Skills: HTML, CSS, Bootstrap, JavaScript, React, Node, Mongodb</h1>
                    <h1 className='mt-3'>Website Link :</h1>
                    <h1 className='mt-3'>https://elated-williams-30a045.netlify.app/</h1>
                    <h1 className='mt-3'>https://hungry-ride-520372.netlify.app/</h1>
                    <h1 className='mt-3'>https://exquisite-malasada-842ae4.netlify.app/</h1>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;