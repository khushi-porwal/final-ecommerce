import React from "react"
import {toast} from "react-toastify"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
const Success = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        toast.success("Payment Successful!")
        setTimeout(()=> {
            Navigate("/")
        },3000)
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="bg-white p-8 rounded shadow text-center">
                <h1 className="text-2xl font-bold text-green-700">Payment Success!</h1>
                <p>Thank you for your purchase.</p>
            </div>
        </div>
    )
}
export default Success
