import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ShopContextProvider from './context/ShopContext.jsx'
import CartContextProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('3legant')).render(
  <React.StrictMode>
    <CartContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </CartContextProvider>
  </React.StrictMode >,
)
