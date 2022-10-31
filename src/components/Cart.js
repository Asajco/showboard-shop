import React, { useContext } from 'react'
import CartContext from '../store/buyContext'

function Cart() {
  const { cart, setCart, setCount } = useContext(CartContext)

  const clearCart = () => {
    setCart([])
    setCount(0)
  }
  return (
    <div>
      {console.log(cart)}
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return (
              <div>
                {item.title} 
                
              </div>
            )
          })}
          <button onClick={clearCart}>clear cart</button>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  )
}

export default Cart
