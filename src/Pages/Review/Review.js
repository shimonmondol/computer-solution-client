import React from 'react';

const Review = () => {
    return (
        <div className='hero min-h-screen bg-base-300'>
            <div class="card w-96 shadow-xl">
                <div>
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/3S3LdDX/image-w856.webp" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Tom Cruise</h2>
                        <p className='text-justify mx-3'>They tried to fix my computer that was hit by lightning and would not turn on.I bought a new one. They took the hard drive out of my old computer and put it in a new one for me and it was ready in two hours.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/Fn1K95Z/American-actor-Leonardo-Di-Caprio-2016.webp" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Leonardo DiCaprio</h2>
                        <p className='text-justify'>They were very informative providing me with various options based on my intended use of the computer. They were agreeable to changes along the way and delivered the finished computer before they originally estimated.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/NNFBx4X/Gal-Gadot-cropped-lighting-corrected.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Gal Gadot</h2>
                        <p className='text-justify'>I was given an approximate price for the 8 GB of RAM and a fixed price for the labor. They advised me of the RAM I needed, which was less than I anticipated or had been told by others. They ordered the RAM which was a bit more expensive than anticipated.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;