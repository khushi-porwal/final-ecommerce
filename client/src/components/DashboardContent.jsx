import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data for profit bar chart
const data = [
  { name: "Mon", profit: 400 },
  { name: "Tue", profit: 300 },
  { name: "Wed", profit: 500 },
  { name: "Thu", profit: 700 },
  { name: "Fri", profit: 200 },
  { name: "Sat", profit: 600 },
  { name: "Sun", profit: 100 },
];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-700 mb-6">
        A collection of analytics showing your sales and orders data.
      </p>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-cyan-100 p-4 rounded-md border border-cyan-400">
          <p className="text-xl font-semibold">3,020</p>
          <p className="text-sm text-gray-700">Weekly new visitors</p>
        </div>
        <div className="bg-red-100 p-4 rounded-md border border-red-400">
          <p className="text-xl font-semibold">2,030</p>
          <p className="text-sm text-gray-700">Weekly new income</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-md border border-blue-400">
          <p className="text-xl font-semibold">8,630</p>
          <p className="text-sm text-gray-700">Weekly new orders</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md border border-green-400">
          <p className="text-xl font-semibold">6,990</p>
          <p className="text-sm text-gray-700">Weekly new reviews</p>
        </div>
      </div>

      {/* Overview Chart Section */}
      <div className="bg-gray-100 p-4 rounded-md shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Overview of Profit</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="profit" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <p className="text-sm text-gray-700">Total Sales</p>
            <p className="text-lg font-semibold">800</p>
            <p className="text-xs text-red-500">-209 (30.9%)</p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Revenue</p>
            <p className="text-lg font-semibold">$6200</p>
            <p className="text-xs text-green-500">+980 (56.2%)</p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Products</p>
            <p className="text-lg font-semibold">630</p>
            <p className="text-xs text-green-500">+46 (28.8%)</p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Ads Spent</p>
            <p className="text-lg font-semibold">$380</p>
            <p className="text-xs text-red-500">-60 (49.3%)</p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Expenses</p>
            <p className="text-lg font-semibold">$890</p>
            <p className="text-xs text-green-500">+498 (3.9%)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Sales Graph (SVG) */}
  <div className="bg-blue-50 p-4 rounded-md shadow">
    <h2 className="text-lg font-semibold mb-4">Sales</h2>
    <div className="w-full h-40 flex items-center justify-center">
      <svg
        viewBox="0 0 200 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="100" fill="#f1f5f9" />
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          points="0,80 30,60 60,65 90,50 120,55 150,35 180,40 200,25"
        />
        <circle cx="30" cy="60" r="3" fill="#3b82f6" />
        <circle cx="60" cy="65" r="3" fill="#3b82f6" />
        <circle cx="90" cy="50" r="3" fill="#3b82f6" />
        <circle cx="120" cy="55" r="3" fill="#3b82f6" />
        <circle cx="150" cy="35" r="3" fill="#3b82f6" />
        <circle cx="180" cy="40" r="3" fill="#3b82f6" />
      </svg>
    </div>
  </div>

  {/* Revenue Chart (SVG Bar Chart) */}
  <div className="bg-blue-50 p-4 rounded-md shadow">
    <h2 className="text-lg font-semibold mb-4">Revenue</h2>
    <div className="w-full h-40 flex items-center justify-center">
      <svg
        viewBox="0 0 200 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="100" fill="#f1f5f9" />
        <rect x="20" y="40" width="15" height="60" fill="#10b981" />
        <rect x="50" y="30" width="15" height="70" fill="#10b981" />
        <rect x="80" y="20" width="15" height="80" fill="#10b981" />
        <rect x="110" y="50" width="15" height="50" fill="#10b981" />
        <rect x="140" y="25" width="15" height="75" fill="#10b981" />
        <rect x="170" y="35" width="15" height="65" fill="#10b981" />
      </svg>
    </div>
  </div>
</div>


    
      </div>
    
  );
};

export default Dashboard;
