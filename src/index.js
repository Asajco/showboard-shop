import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/authContex'
import { ItemsContextProvider } from './store/itemsContext'
import { CartContextProvider } from './store/buyContext'

const App = React.lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ItemsContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<div>riť</div>}>
              <App />
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ItemsContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
