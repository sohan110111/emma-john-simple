import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productKey} = useParams();
    const fakeData
    return (
        <div>
            <h1>{productKey} Detail coming soon.</h1>
        </div>
    );
};

export default ProductDetail;