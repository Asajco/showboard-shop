import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../store/authContex'
import styles from '../../css/Profile.module.css'
import { GrUser } from 'react-icons/gr'
import { collection, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase'
import OrderCard from '../OrderCard'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Spinner from '../Spinner'
import CartContext from '../../store/buyContext'

function Profile() {
  const [error, setError] = useState('')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const { currentUser, logout } = useAuth()
  const {setCount} = useContext(CartContext)
  const navigate = useNavigate()
  const location = useLocation()

  const destinationURL = location.state?.returnURL || '/'
  const noOrderImage = require('../../assets/noOrder.png')

  useEffect(() => {
    setLoading(true)
    getOrders()
    console.log(order)
  }, [])

  async function handleLogout() {
    setError('')
    try {
      await logout()
      setCount(0)
      navigate(destinationURL)
    } catch {
      setError('Failed to log out')
    }
  }
  //fetch order from firebase by user email

  const getOrders = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'))
    setLoading(false)
    setOrder(
      querySnapshot.docs.map((doc) => {
        return doc.data()
      }),
    )
  }

  return (
    <div className={styles['profile-container']}>
      <GrUser className={styles['profile-icon']} />
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
          {order ? (
            <div className={styles['profile-order-container']}>
              {console.log(order)}
              <h2>Orders: </h2>
              {order.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      {item.user === currentUser.email && (
                        <>
                          {/* <h2>Order: </h2> */}
                          <OrderCard
                            price={item.totalPrice}
                            title={item.order.map((item, index) => {
                              return (
                                <div key={index}>
                                  <p>{item.title}</p>
                                </div>
                              )
                            })}
                          />
                        </>
                      )}
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            <div>
              {loading ? <Spinner /> : <LazyLoadImage src={noOrderImage} />}
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
