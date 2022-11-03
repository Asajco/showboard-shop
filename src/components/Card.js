import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Card.module.css'

function Card(props) {
  return (
    <div className={styles['card-container']}>
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
      <div className={styles['card-lower-part']}>
        <p>{props.price} €</p>
        <Link to={props.link} className={styles["card-link"]}>View more</Link>
      </div>
    </div>
  )
}

export default Card
