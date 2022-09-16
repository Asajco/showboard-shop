import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsShop } from 'react-icons/bs'
import styles from '../css/ShopLayout.module.css'

function ShopLayout() {
  return (
    <div className={styles['shop-container']}>
      <BsShop className={styles["shop-icon"]}/>
      <div className={styles["shop-links"]}>
        <Link to="/shop/snowboards" className={styles["shop-link"]}>Snowboards</Link>
        <Link to="/shop/bindings" className={styles["shop-link"]}>Bindings</Link>
        <Link to="/shop/boots" className={styles["shop-link"]}>Boots </Link>
        
      </div>
      <Outlet />
    </div>
  )
}

export default ShopLayout
