import React, { useContext } from 'react'
import ItemsContext from '../store/itemsContext'
import { useParams } from 'react-router-dom'
import ItemPage from './ItemPage'
import CartContext from '../store/buyContext'

function BindingsItemPage() {
  const { itemId } = useParams()
  const { bindings } = useContext(ItemsContext)
  const {cart, setCart, count, setCount} = useContext(CartContext)
  
  const addToCart = (item) =>{
    setCart([...cart, item])
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
                    description={item.description}
                    size={item.size.map((size, index) => {
                      return <p key={index}>{size}</p>
                    })}
                  />
                  <button onClick={()=>addToCart(item)}>Add to cart</button>
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
