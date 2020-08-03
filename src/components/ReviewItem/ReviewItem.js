import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name, quantity, key, price} = props.product;
    const ReviewItemStyle = {
        borderBottom:'1px solid #d3d3d3',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };   
    return (
        <div style={ReviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
}; 

export default ReviewItem;