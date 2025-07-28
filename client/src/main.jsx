import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import LocationContextProvider from './context/locationContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocationContextProvider>
      <CartProvider>
        <App /> {/* ✅ Only one App, properly wrapped */}
      </CartProvider>
    </LocationContextProvider>
  </StrictMode>
);
