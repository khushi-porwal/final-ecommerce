// src/App.jsx

import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/CompoundRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
