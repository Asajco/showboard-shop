import React, { useContext } from 'react'
import ItemsContext from '../../store/itemsContext'
import Card from '../Card'
import styles from '../../css/Snowboard.module.css'
import styled from 'styled-components'
// import { useParams } from 'react-router'
const Snowboards = () => {
  const { snowboards } = useContext(ItemsContext)
  // const { id } = useParams()
  console.log(snowboards)
  return (
    <>
      <h1>Snowboards</h1>

      {console.log(snowboards)}
      {snowboards ? (
        <div className={styles["card-container"]}>
          {snowboards.map((snowboard, index) => {
          console.log()
            return (
              <Card
                key={index}
                image={snowboard.image}
                title={snowboard.title}
                description={snowboard.description}
                brand={snowboard.brand}
                price={snowboard.price}
                size={snowboard.size.map((size, index)=>{
                  return <label key={index} className={styles["size"]}>{size}</label>
                })}
                link={`/shop/snowboards/${snowboard.title}`}
              />
            )
          })}
        </div>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </>
  )
}

export default Snowboards
