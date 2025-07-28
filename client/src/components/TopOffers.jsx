import React from "react"
import OfferCard from "./OfferCard";

const offers = [
    {id:1, topText: "DEALS OF", bottomText: "THE WEEK"},
    {id:2, topText: "BIG PACK", bottomText: "BIGGER DISCOUNTS"},
    {id:3, topText: "COMBOS", bottomText: "YOU CAN'T MISS"},
    {id:4, topText: "THE", bottomText: "₹30 CORNER"}
]
const TopOffer = () => {
    return(
        <div className="  p-6">
            <h2 className="text-2xl items-center ml-42 font-bold mb-4">Top Offer</h2>
            <div className="flex justify-center gap-9 overflow-x-auto" >
                {offers.map((offer)=>(
                    <OfferCard key={offer.id} {...offer}/>
                ))}
            </div>
        </div>
    )
}
export default TopOffer;