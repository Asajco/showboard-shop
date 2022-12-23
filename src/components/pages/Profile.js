import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../store/authContex'
import styles from '../../css/Profile.module.css'
import OrderCard from '../OrderCard'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Spinner from '../Spinner'
import CartContext from '../../store/buyContext'
import ItemsContext from '../../store/itemsContext'
import { Container, Button, _Link } from '../../styles/GlobalStyles'
import styled from 'styled-components'
import NoOrder from "../../assets/no-order.png"

function Profile() {
  const ProfileFunctionBar = styled(Container)`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 10rem;
    p {
      font-size: 1.2rem;
      font-weight: 550;
    }
    button {
      width: 10.8rem;
      height: 2rem;
      background-color: transparent;
      font-size: 1.2rem;
      margin-top: 2rem;
      font-weight: 550;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.2s;
    }
  `
  const ProfileLink = styled(_Link)`
    margin-top: 2rem;
    font-weight: 550;
    transition: 0.25s;
    
  `
  const Orders = styled(Container)`
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 3rem;
    align-items: flex-start;
    h2 {
      margin: 0rem 0rem 1.5rem 3rem;
    }
  `

  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const { setCount, setCart } = useContext(CartContext)
  const { order, loading } = useContext(ItemsContext)
  const navigate = useNavigate()
  const location = useLocation()

  const destinationURL = location.state?.returnURL || '/'
  console.log(order.map((item)=>item.user))
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

  return (
    <Container>
      {/* <GrUser className={styles['profile-icon']} /> */}
      {currentUser ? (
        <>
          {error && alert(error)}
          <ProfileFunctionBar>
            <p>{currentUser.email}</p>
            <ProfileLink
              to="/update-profile"
    
            >
              Update profile
            </ProfileLink>
            <Button onClick={handleLogout}>Log out</Button>
          </ProfileFunctionBar>

          {order.map((item)=>item.user) === currentUser.email ? (
            
            <Orders>
              <h2>Order History</h2>
              {order.map((item, index) => {
                return (
                  <>
                    <div>
                      {item.user === currentUser.email ? (
                        <>
                          {/* <h2>Order: </h2> */}
                          <OrderCard
                            key={index}
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
                      ) : null}
                    </div>
                  </>
                )
              })}
            </Orders>
          ) : (
            <div>
              {loading ? (
                <Spinner />
              ) : (
                <Container>
                  <LazyLoadImage
                    src={NoOrder}
                    className={styles['profile-no-order-image']}
                  />
                  <h2>No orders yet</h2>
                  <Link to="/shop" className={styles['profile-link']}>
                    Make an order
                  </Link>
                </Container>
              )}
            </div>
          )}
        </>
      ) : (
        <h1 className={styles['profile-notloged']}>Log in to see details</h1>
      )}
    </Container>
  )
}

export default Profile
