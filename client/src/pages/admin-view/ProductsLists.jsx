// import React, { useEffect, useState } from "react";
// import api from "../../services/api";
// import ProductCard from "../../components/ProductCard";
// import ProductForm from "../../components/ProductForm";
// import Sidebar from "../../components/Sidebar";

// // ✅ MUI Components & Icons
// import {
//   Snackbar,
//   Alert,
//   Backdrop,
//   CircularProgress,
// } from "@mui/material";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

// const AdminProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get("/admin/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching products:", err.message);
//       showSnackbar("Failed to load products", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       setDeleting(true);
//       await api.delete(`/admin/products/${id}`);
//       showSnackbar("Product deleted successfully", "success");
//       fetchProducts();
//     } catch (err) {
//       console.error("❌ Error deleting product:", err.message);
//       showSnackbar("Failed to delete product", "error");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const showSnackbar = (message, severity = "success") => {
//     setSnackbar({ open: true, message, severity });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="ml-64 w-full bg-gray-100 min-h-screen p-8">
//         {/* Main Heading */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
//           <Inventory2OutlinedIcon fontSize="large" />
//           Manage Products
//         </h1>

//         {/* Product Form */}
//         <div className="bg-white p-6 rounded-xl shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
//             <AddBoxOutlinedIcon />
//             Add or Edit Product
//           </h2>
//           <ProductForm
//             fetchProducts={fetchProducts}
//             selectedProduct={selectedProduct}
//             setSelectedProduct={setSelectedProduct}
//             showSnackbar={showSnackbar}
//           />
//         </div>

//         {/* Product List */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-6 text-gray-700 flex items-center gap-2">
//             <Inventory2OutlinedIcon />
//             Product List
//           </h2>

//           {loading ? (
//             <div className="flex justify-center items-center h-32">
//               <CircularProgress />
//             </div>
//           ) : products.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {products.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   product={product}
//                   onEdit={(p) => setSelectedProduct(p)}
//                   onDelete={handleDelete}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-gray-500 text-lg">
//               No products available.
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ Snackbar for Feedback */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>

//       {/* ✅ Backdrop while Deleting */}
//       <Backdrop open={deleting} sx={{ color: "#fff", zIndex: 9999 }}>
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// };

// export default AdminProductList;
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import Sidebar from "../../components/Sidebar";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  // Memoized fetch function to prevent unnecessary recreations
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err.message);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name || "",
        price: selectedProduct.price || "",
        description: selectedProduct.description || "",
        category: selectedProduct.category || "",
        image: selectedProduct.image || "",
      });
    } else {
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProduct) {
        await api.put(`/admin/products/${selectedProduct._id}`, formData);
        toast.success("Product updated successfully");
      } else {
        await api.post("/admin/products", formData);
        toast.success("Product added successfully");
      }
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/products/${id}`);
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full bg-gray-100 min-h-screen p-8">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
        </div>

        {/* Product Form Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition w-full"
            >
              {selectedProduct ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-10 w-10 rounded-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/40";
                          }}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${product.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;