import React from 'react';

const GroceryCategoryCard = ({image, title, discount}) => {
    return(
        <div className="rounded-lg overflow-hidden border shadow-sm hover:shadow-2xl transition-all bg-white max-width-xs">
            <img src={image} className="h-36 w-full object-contain p-3"></img>
            <div className="px-4 pb-4">
                <p className="text-gray-700 text-sm mt-2">{title}</p>
                <p className="font-bold text-sm text-black mt-1">MIN {discount}% OFF</p>
            </div>
        </div>
    )
}
export default GroceryCategoryCard