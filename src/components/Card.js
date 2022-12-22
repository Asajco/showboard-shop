import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Card.module.css'
import {LazyLoadImage} from "react-lazy-load-image-component"
import Placeholder from "../assets/placeholder.jpeg"

function Card(props) {
  return (
    <div className={styles['card-container']}>
      <h1>{props.title}</h1>
      <LazyLoadImage src={props.image} effect="blur" placeholderSrc={Placeholder}/>
      <div className={styles['card-lower-part']}>
        <p>{props.price} €</p>
        <Link to={props.link} className={styles["card-link"]}>View more</Link>
      </div>
    </div>
  )
}

export default Card
