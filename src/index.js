import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/authContex'
import { ItemsContextProvider } from './store/itemsContext'
import { CartContextProvider } from './store/buyContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ItemsContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </ItemsContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
