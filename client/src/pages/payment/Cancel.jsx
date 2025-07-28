import React from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import { useEffect } from "react"

const Cancel = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        toast.error("Payment Cancelled")
        setTimeout(()=> {
            navigate("/cartempty")
        }, 3000)
    },[])
    return(
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="bg-white p-8 rounded shadow text-center">
                <h1 className="text-2xl font-bold text-red-700">
                    Payment Cancelled
                </h1>
                <p className="mt-4">Looks like you cancelled the payment process</p>
            </div>
        </div>
    )
}

export default Cancel