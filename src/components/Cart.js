import React, { useContext, useEffect } from 'react'
import CartContext from '../store/buyContext'
import styles from '../css/Cart.module.css'
import ItemInCart from './ItemInCart'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

function Cart() {
  const {
    cart,
    setCart,
    setCount,
    totalPriceOfCart,
    setTotalPriceOfCart,
  } = useContext(CartContext)

  const emptyCart = require('../assets/empty-cart.png')
  const clearCart = () => {
    setCart([])
    setCount(0)
    setTotalPriceOfCart(0)
  }
  useEffect(() => {
    setTotalPriceOfCart(
      cart.map((item) => item.price).reduce((a, b) => a + b, 0),
    )
  }, [cart])

  return (
    <div>
      {console.log(cart)}
      {cart.length > 0 ? (
        <div className={styles['item-container']}>
          {cart.map((item, index) => {
            console.log(item.price)

            return (
              <>
                <h2>Items in your cart</h2>
                <ItemInCart
                  key={index}
                  title={item.title}
                  image={item.image}
                  price={item.price + ' €'}
                  totalPriceOfProduct={item.price}
                  size={item.size}
                />
              </>
            )
          })}
          <div className={styles['total-price']}>
            <button onClick={clearCart}>clear cart</button>
            <p>Total price: {Math.round(totalPriceOfCart * 100) / 100} € </p>
            <Link to="payment">Proceed to payment</Link>
          </div>
        </div>
      ) : (
        <div className={styles['cart-is-empty']}>
          <h2>Your cart is empty</h2>
          <LazyLoadImage src={emptyCart}/>
          {/* <img src={emptyCart} alt="" /> */}
        </div>
      )}
    </div>
  )
}

export default Cart
