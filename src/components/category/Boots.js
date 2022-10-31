import React, { useContext } from 'react'
import ItemsContext from '../../store/itemsContext'
import Card from '../Card'
import styles from '../../css/Snowboard.module.css'
import { Link } from 'react-router-dom'

function Boots() {
  const { boots } = useContext(ItemsContext)
  return (
    <>
      <h1>Boots</h1>
      {boots ? (
        <div className={styles['card-container']}>
          {boots.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                brand={item.brand}
                price={item.price}
                size={item.size.length >=4  ? <Link to="/item"></Link> : item.size.map((size, index)=>{
                  return <label key={index}>{size}</label>
                }) }
                link={`/shop/boots/${item.title}`}
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

export default Boots
