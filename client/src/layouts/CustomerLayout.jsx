import React from "react";
import {Outlet} from 'react-router-dom'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
const CustomerLayout = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    )
}
export default CustomerLayout