import React, {useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {useAuth} from '../../store/authContex'
import styles from "../../css/Profile.module.css"
import {GrUser} from "react-icons/gr"

function Profile() {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destinationURL = location.state?.returnURL || "/";

  async function handleLogout() {
    setError("")
    
    try{
      await logout()
      navigate(destinationURL)
    }
    catch{
      setError("Failed to log out")
    }
  }
  
  
  return (
    <div className={styles["profile-wrapper"]}>
      <GrUser className={styles["profile-icon"]}/>
      {currentUser ?  <>
        {error && alert(error)}
      <p>{currentUser.email}</p>
      <Link to="/update-profile">Update profile</Link>
      <button onClick={handleLogout}>Log out</button>
      </>
      : <h1 className={styles["profile-notloged"]}>Log in to see details</h1>}
      
    </div>
  )
}

export default Profile