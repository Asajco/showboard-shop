import React, { useContext, useState } from 'react'
import ItemsContext from '../store/itemsContext'
import { useParams } from 'react-router-dom'
import ItemPage from './ItemPage'
import CartContext from '../store/buyContext'
import styles from '../css/SizeButton.module.css'
function BindingsItemPage() {
  const [size, setSize] = useState(null)
  const { itemId } = useParams()
  const { bindings } = useContext(ItemsContext)
  const {cart, setCart, count, setCount} = useContext(CartContext)
  
  const setSizeOfItem = (size) => {
    setSize(size)
  }
  
  const addToCart = (item) =>{
    setCart([...cart, { ...item, size: size }])
    setCount(count + 1)
    window.scrollTo(0, 0);
  }
  return (
    <div>
      {bindings ? (
        bindings.map((item, index) => {
          console.log(item)
          console.log(itemId)
          return (
            <div>
              {item.title === itemId ? (
                <div key={index}>
                  {/* <h1>{item.title}</h1> */}
                  <ItemPage
                    image={item.image}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                    onClick={()=>addToCart(item)}
                    description={item.description}
                    size={item.size.map((size, index) => {
                      return (
                        <div>
                          <button
                          key={index}
                          onClick={() => setSizeOfItem(size)}
                          className={styles['size-btn']}
                        >
                          {size}
                        </button>
                        
                        </div>
                      )
                    })}
                  />
                  
                </div>
              ) : null}
            </div>
          )
        })
      ) : (
        <div>Something went wrong ...</div>
      )}
    </div>
  )
}

export default BindingsItemPage
