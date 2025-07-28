import React from "react"

const OfferCard = ({topText,bottomText}) => {
    return(
        <div className="w-75 rounded-lg overflow-hidden shadow hover:shadow-2xl transition cursor-pointer">
            <div className="bg-blue-600 text-white font-bold text-sm p-3">{topText}</div>
            <div className="bg-white px-3 py-4">
                <h3 className="font-bold text-lg leading-tight">{bottomText}</h3>
                <p className="text-xs text-gray-500 mt-3">View offers</p>
            </div>
        </div>
    )
}
export default OfferCard