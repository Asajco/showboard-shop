import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../store/buyContext'
import ItemsContext from '../store/itemsContext'
import ItemPage from './ItemPage'
import Spinner from './Spinner'
import styles from '../css/SizeButton.module.css'
function SnowboardItemPage() {
  const [size, setSize] = useState(null)
  const { itemId } = useParams()
  const { snowboards } = useContext(ItemsContext)
  const { cart, setCart, setCount, count } = useContext(CartContext)

  const setSizeOfItem = (size) => {
    setSize(size)
   
  }

  const addToCart = (item) => {
    
    //if size of item in cart is same alert
    if (cart.some((item) => item.size === size)) {
      alert('You already have this item in your cart')
    } else {
      setCart([...cart, { ...item, size: size }])
      setCount(count + 1)
    }
   
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {snowboards ? (
        snowboards.map((item, index) => {
          return (
            <div>
              {item.title === itemId ? (
                <div key={item.title}>
                  <ItemPage
                    key={index}
                    image={item.image}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    onClick={() => addToCart(item)}
                    size={item.size.map((size, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setSizeOfItem(size)}
                          className={styles['size-btn']}
                        
                        >
                          {size}
                        </button>
                      )
                    })}
                  />
                  {/* <button onClick={()=>addToCart(item)}>Add to cart</button> */}
                </div>
              ) : null}
            </div>
          )
        })
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default SnowboardItemPage
