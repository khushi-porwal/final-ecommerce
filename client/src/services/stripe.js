import axios from "axios"

import {loadStripe} from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51R7Du1Qjp3O1Gp441PJinMSpxz5VxVgVWogKdepQboHwS5x2QhY22KQnb43sfVPlD3TUE8rIzKa2ouW3GoCak16K00v9oZf77y")

export const createCheckoutSession  = async(cartItems) => {
    const stripe = await stripePromise;

    try {
        const response = await axios.post("http://localhost:4000/api/payment/create-checkout-session", {
            cartItems,
        })

        const result = await stripe.redirectToCheckout({
            sessionId: response.data.id,
        });

        if(result.error) {
            console.error(result.error.message);
        }
    } catch (error) {
        console.error("checkout error", error)
    }
}