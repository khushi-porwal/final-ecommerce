import { Routes, Route } from "react-router-dom";
// import CustomerRoutes from "./CustomerRoutes"
import Register from '../pages/auth/Register';
import PageNotFound from '../utils/PageNotFound';
import Login from '../pages/auth/Login';
import Unauthorized from '../utils/Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import CartEmpty from '../pages/CartEmpty';
import AdminDashboard from '../pages/admin-view/AdminDashboard';
import AdminProductList from "../pages/admin-view/ProductsLists"; 
import ProductDetails from '../pages/ProductDetails';
// import CustomerLayout from '../components/CustomerLayout'
import ProductList from '../pages/ProductLists';
import Home from "../pages/Home";
import Success from "../pages/payment/Success";
import Cancel from "../pages/payment/Cancel";
import Contact from "../pages/contact/Contact"
import Orders from "../pages/admin-view/Orders"
const MainRoutes = () => {
  return (
    <Routes>
      <Route path= '/' element= {<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/category/:categoryName" element={<ProductList />} />
      <Route path= "/cartempty" element={<CartEmpty/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails />} /> // ✅ CORRECT

      <Route path="/success" element={<Success/>}/>
      <Route path="/cancel" element={<Cancel/>}/>

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/products" element={<AdminProductList/>} />
      
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            < Home/>
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/admin/orders" element={<Orders/>}/>
    </Routes>
  )
}
export default MainRoutes


                

          