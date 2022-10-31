import React, { useState } from 'react'

const CartContext = React.createContext()

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  return (
    <CartContext.Provider value={{ cart, setCart, count, setCount }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
