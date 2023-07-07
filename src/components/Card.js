import React from 'react';

const Card = ({data}) => {
    console.log("💛 data:", data?.products[0]?.productData)
    return (
        <div className='card_img_block'>
            <img src='' alt='img'/>
        </div>
    );
};

export default Card;