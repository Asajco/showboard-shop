import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemsContext from '../store/itemsContext'
import ItemPage from './ItemPage'
import CartContext from '../store/buyContext'
import Spinner from './Spinner'

function BootsItemPage() {
  const { itemId } = useParams()
  const { boots } = useContext(ItemsContext)
  const { cart, setCart, count, setCount } = useContext(CartContext)

  const addToCart = (item) => {
    setCart([...cart, item])
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
                    size={item.size.map((size, index) => {
                      return <p key={index}>{size}</p>
                    })}
                  />
                  <button onClick={() => addToCart(item)}>Add to cart</button>
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
