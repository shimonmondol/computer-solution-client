import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer';
import AllProducts from './AllProducts';


const Product = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Product;