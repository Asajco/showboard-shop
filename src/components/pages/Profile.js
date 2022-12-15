import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../store/authContex'
import styles from '../../css/Profile.module.css'
import OrderCard from '../OrderCard'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Spinner from '../Spinner'
import CartContext from '../../store/buyContext'
import ItemsContext from '../../store/itemsContext'

function Profile() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const { setCount, setCart } = useContext(CartContext)
  const { order, loading } = useContext(ItemsContext)
  const navigate = useNavigate()
  const location = useLocation()

  const destinationURL = location.state?.returnURL || '/'

  async function handleLogout() {
    setError('')
    try {
      await logout()
      setCount(0)
      setCart([])
      
      navigate(destinationURL)
    } catch {
      setError('Failed to log out')
    }
  }
  
  console.log(loading)
  //fetch order from firebase by user email

  return (
    <div className={styles['profile-container']}>
      {/* <GrUser className={styles['profile-icon']} /> */}
      {currentUser ? (
        <>
          {error && alert(error)}
          <div className={styles['profile-wrapper']}>
            <p>{currentUser.email}</p>
            <Link to="/update-profile" className={styles['profile-link']}>
              Update profile
            </Link>
            <button onClick={handleLogout}>Log out</button>
          </div>

          {order && order.length > 0 ? (
           
            <div className={styles['profile-order-container']}>
              <h2>Order History</h2>
              {order.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      {item.user === currentUser.email ? (
                        <>
                          {/* <h2>Order: </h2> */}
                          <OrderCard
                            price={item.totalPrice}
                            title={item.order.map((item, index) => {
                              return (
                                <div key={index}>
                                  <p>{item.title}</p>
                                  <p>Size: {item.size}</p>
                                </div>
                              )
                            })}
                          />
                        </>
                      ) : (
                        null
                      )}
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            <div>
              {loading ? (
                <Spinner />
              ) : (
                <div className={styles['profile-no-order']}>
                  <LazyLoadImage
                    src={require('../../assets/no-order.png')}
                    className={styles['profile-no-order-image']}
                  />
                  <h2>No orders yet</h2>
                  <Link to="/shop" className={styles['profile-link']}>
                    Make an order
                  </Link>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <h1 className={styles['profile-notloged']}>Log in to see details</h1>
      )}
    </div>
  )
}

export default Profile
