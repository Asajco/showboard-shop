import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./css/NotFound.module.css"
function NotFound() {
  const image = require('./assets/notFound.png')
  return (
    <div className={styles["wrapper"]}>
      <LazyLoadImage src={image} width={600} />
    </div>
  )
}

export default NotFound
