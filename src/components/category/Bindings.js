import React, { useContext } from 'react'
import ItemsContext from '../../store/itemsContext'
import Card from '../Card'
import styles from "../../css/Snowboard.module.css"

function Bindings() {
  const { bindings } = useContext(ItemsContext)

  
  return (
    <>
      <h1>Bindings</h1>
     
      {bindings ? (
        <div className={styles["card-container"]}>
          {bindings.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                brand={item.brand}
                price={item.price}
                size={item.size.map((size, index)=>{
                  return <label key={index}>{size}</label>
                })}
                link={`/shop/bindings/${item.title}`}
              />
            )
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Bindings
