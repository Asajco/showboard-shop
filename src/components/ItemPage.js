import React from 'react'
import styles from '../css/ItemPage.module.css'

function ItemPage(props) {
  return (
    <div className={styles['item-page-wrapper']}>
      <img src={props.image} alt="item" />
      <div className={styles['item-page-about-item-wrapper']}>
        <h2>{props.title}</h2>
        <label>{props.brand}</label>
        <p>{props.description}</p>
        <div className={styles["item-page-sizes"]}>
          <p>{props.size}</p>
        </div>
        <p className={styles['item-page-price']}>{props.price + ' €'}</p>
      </div>
    </div>
  )
}

export default ItemPage
