import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../store/authContex'
import styles from '../../css/Profile.module.css'
import { GrUser } from 'react-icons/gr'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase'


function Profile() {
  const [error, setError] = useState('')
  const [order, setOrder] = useState(null)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destinationURL = location.state?.returnURL || '/'

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate(destinationURL)
    } catch {
      setError('Failed to log out')
    }
  }
  //fetch order from firebase
  const getOrders = async() =>{
    const docRef =  await getDoc(doc(db, 'users', currentUser.email))
    setOrder(docRef.data())
    console.log(order);
  }
  useEffect(()=>{
    getOrders()
    console.log(order)
  },[])

  return (
    <div className={styles['profile-container']}>
      <GrUser className={styles['profile-icon']} />
      {currentUser ? (
        <>
          {error && alert(error)}
          <div className={styles["profile-wrapper"]}>
            <p>{currentUser.email}</p>
            <Link to="/update-profile" className={styles["profile-link"]}>Update profile</Link>
            <button onClick={handleLogout}>Log out</button>
            <pre>{JSON.stringify(order, null, 0)}</pre>
          </div>
          <button onClick={getOrders}>show orders</button>
        </>
      ) : (
        <h1 className={styles['profile-notloged']}>Log in to see details</h1>
        
      )}
    </div>
  )
}

export default Profile
