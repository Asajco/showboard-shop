import React, { useContext, useEffect, useState } from 'react'
import styles from '../css/ItemInCart.module.css'
import CartContext from '../store/buyContext'

function ItemInCart(props) {
  const {
    setTotalPriceOfCart,
    totalPriceOfCart,
    setCart,
    setCount,
    count
  } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setTotalPriceOfCart(totalPriceOfCart + props.totalPriceOfProduct)
    setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    setTotalPriceOfCart(totalPriceOfCart - props.totalPriceOfProduct)
    setQuantity(quantity - 1)
  }
  const removeItem = () => {
    setCart((prev) => prev.filter((item) => item.title !== props.title))
    setCount(count - 1)
  }

  return (
    (
      <div className={styles['item-wrapper']}>
        <img src={props.image} alt="" />
        <div className={styles['item-info-wrapper']}>
          <h4>{props.title}</h4>
          <div className={styles['item-info']}>
            <p>{props.size}</p>
            <div className={styles['item-quantity']}>
              {quantity > 1 ? (
                <button onClick={decreaseQuantity}>-</button>
              ) : (
                <button disabled>-</button>
              )}

              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>{props.price}</p>
            <p>{props.totalPriceOfProduct * quantity}</p>
            <button onClick={removeItem} className={styles["item-info-remove-btn"]}>X</button>
          </div>
        </div>
      </div>
    )
  )
}

export default ItemInCart
