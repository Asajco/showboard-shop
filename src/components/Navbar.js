import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Navbar.module.css'
import {useAuth} from "../store/authContex"

function Navbar() {
  const {currentUser, logout} = useAuth()
  
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles['navbar-wrapper']}>
        <Link to="/" className={styles["navbar-link"]}>Home</Link>
        <Link to="/profile" className={styles["navbar-link"]}>Profile</Link>
        <Link to="/shop" className={styles["navbar-link"]}>Shop</Link>
        {currentUser ? <button onClick={logout}>Log out</button> : <Link to="/signin" className={styles["navbar-link"]}>Log in</Link>}
      </nav>
    </div>
  )
}

export default Navbar
