import { Link, Outlet } from "react-router-dom";

const DashboardLayout=()=>{
    
    return(
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2 bg-red-500 text-white text-xl text-center">
                <div className="bg-black py-5 font-bold text-xl">Sidebar</div>
                <div className=" p-3 bg-red-300 rounded-md m-2 hover:bg-red-700 duration-100">
                    
                    <Link to="/viewproduct">Product Details</Link>
                </div>
                <div className=" p-3 bg-red-300 rounded-md m-2 hover:bg-red-700 duration-100">
                    <Link to="/orderslist">Order Lists</Link>
                </div>
            </div>
            <div className="col-span-10">
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout