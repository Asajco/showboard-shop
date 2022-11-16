import React, { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import styles from '../css/Navbar.module.css'
import { useAuth } from '../store/authContex'
import { BsFillCartFill } from 'react-icons/bs'
import CartContext from '../store/buyContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Navbar() {
  const { currentUser, logout } = useAuth()
  const { count, setCount } = useContext(CartContext)
  const navigate = useNavigate()
  const handleLogOut = () =>{
  logout()
  navigate("/")
  setCount(0)
  }
  return (
    <div className={styles['navbar-container']}>
      <LazyLoadImage src={require("../assets/logo.png")} width={110} height={80}/>
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
          <button onClick={handleLogOut}>Log out</button>
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
