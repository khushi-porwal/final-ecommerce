import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-4 text-2xl font-bold border-b border-gray-600">
        Admin Panel
      </div>
      <nav className="mt-6 flex flex-col gap-2 px-4">
        <Link to="/admin-dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
          Dashboard
        </Link>
        <Link to="/admin/orders" className="hover:bg-gray-700 px-3 py-2 rounded">
          Orders
        </Link>
        <Link to="/admin/products" className="hover:bg-gray-700 px-3 py-2 rounded">
          Products
        </Link>
        <Link to="/admin/options" className="hover:bg-gray-700 px-3 py-2 rounded">
          Options
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
