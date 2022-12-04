import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemsContext from '../store/itemsContext'
import ItemPage from './ItemPage'
import CartContext from '../store/buyContext'
import Spinner from './Spinner'
import styles from '../css/SizeButton.module.css'

function BootsItemPage() {
  const [size, setSize] = useState(null)
  const { itemId } = useParams()
  const { boots } = useContext(ItemsContext)
  const { cart, setCart, count, setCount } = useContext(CartContext)

  const setSizeOfItem = (size) => {
    setSize(size)
  }

  const addToCart = (item) => {
    setCart([...cart, { ...item, size: size }])
    setCount(count + 1)
    window.scrollTo(0, 0)
  }
  return (
    <div>
      {boots ? (
        boots.map((item, index) => {
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
                </div>
              ) : null}
            </div>
          )
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default BootsItemPage
