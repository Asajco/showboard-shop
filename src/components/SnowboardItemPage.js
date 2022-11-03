import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../store/buyContext'
import ItemsContext from '../store/itemsContext'
import ItemPage from './ItemPage'
import Spinner from './Spinner'

function SnowboardItemPage() {
  const { itemId } = useParams()
  const { snowboards } = useContext(ItemsContext)
  const {cart, setCart, setCount, count} = useContext(CartContext)
   
  const addToCart = (item) =>{
    setCart([...cart, item])
    setCount(count + 1)
    window.scrollTo(0, 0);
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
                    size={item.size.map((size, index) => {
                      return <label key={index}>{size}</label>
                    })}
                  />
                  <button onClick={()=>addToCart(item)}>Add to cart</button>
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
