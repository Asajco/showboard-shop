import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Navbar.module.css'
import { useAuth } from '../store/authContex'
import { BsFillCartFill } from 'react-icons/bs'
import CartContext from '../store/buyContext'

function Navbar() {
  const { currentUser, logout } = useAuth()
  const { count } = useContext(CartContext)
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles['navbar-wrapper']}>
        <Link to="/" className={styles['navbar-link']}>
          Home
        </Link>
        <Link to="/profile" className={styles['navbar-link']}>
          Profile
        </Link>
        <Link to="/shop" className={styles['navbar-link']}>
          Shop
        </Link>

        {currentUser ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <Link to="/signin" className={styles['navbar-link']}>
            Log in
          </Link>
        )}
        <Link to="/cart" className={styles["navbar-cart"]}>
          <BsFillCartFill className={styles['navbar-icon']} />
          <p>{count}</p>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
