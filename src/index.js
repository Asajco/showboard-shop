import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/authContex'
import { ItemsContextProvider } from './store/itemsContext'
import { CartContextProvider } from './store/buyContext'
import GlobalStyles, { Container } from './styles/GlobalStyles'

const App = React.lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ItemsContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Suspense
              fallback={
                <Container>
                  <h1>Welcome</h1>
                </Container>
              }
            >
              <App />
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ItemsContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
