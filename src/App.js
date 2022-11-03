import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Profile from './components/pages/Profile'
import SignUp from './components/pages/SignUp'
import Snowboards from './components/category/Snowboards'
import Bindings from './components/category/Bindings'
import Boots from './components/category/Boots'
import NotFound from './NotFound'
import ShopLayout from './components/ShopLayout'
import SignIn from './components/pages/SignIn'
import ForgotPassword from './components/pages/ForgotPassword'
import UpdateProfile from './components/pages/UpdateProfile'
import SnowboardItemPage from './components/SnowboardItemPage'
import BindingsItemPage from './components/BindingsItemPage'
import BootsItemPage from './components/BootsItemPage'
import Cart from './components/Cart'
import Payment from './components/pages/Payment'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<ShopLayout />}>
          {/* <Route index element={<Shop />} /> */}
          <Route path="snowboards" element={<Snowboards />} />
          <Route path="bindings" element={<Bindings />} />
          <Route path="boots" element={<Boots />} />
          <Route path="snowboards/:itemId" element={<SnowboardItemPage />} />
          <Route path="bindings/:itemId" element={<BindingsItemPage />} />
          <Route path="boots/:itemId" element={<BootsItemPage />} />
          
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart/>}/>
          <Route path="cart/payment" element={<Payment/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
