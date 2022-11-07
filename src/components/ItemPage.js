import React from 'react'
import styles from '../css/ItemPage.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ItemPage(props) {
  return (
    <div className={styles['item-page-wrapper']}>
      <LazyLoadImage
        src={props.image}
        className={styles['item-page-wrapper-image']}
      />
      <div className={styles['item-page-about-item-wrapper']}>
        <h2>{props.title}</h2>
        <label>{props.brand}</label>
        <p>{props.description}</p>
        <div className={styles['item-page-sizes']}>
          <h4>Sizes:</h4>
          {props.size}
        </div>
        <p className={styles['item-page-price']}>{props.price + ' €'}</p>
        <button onClick={props.onClick} className={styles["item-page-btn"]}>Add to cart</button>
      </div>
    </div>
  )
}

export default ItemPage
