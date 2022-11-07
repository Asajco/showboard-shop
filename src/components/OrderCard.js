import React from 'react'
import styles from "../css/OrderCard.module.css"

function OrderCard(props) {
  return (
    <div className={styles["order-card-wrapper"]}>
        <h4>Items:</h4>
        <p>{props.title}</p>
        <h4>Total Price: </h4>
        <p >{props.price} €</p>
    </div>
  )
}

export default OrderCard