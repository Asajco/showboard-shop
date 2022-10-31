import React, { useState, useRef } from 'react'
import { useAuth } from '../../store/authContex'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../../css/PageWithForm.module.css'
import {GoSignIn} from "react-icons/go"

export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  


  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }
  return (
    <div className={styles['page-container']}>
      <GoSignIn className={styles["page-icon"]}/>
      {error && alert(error)}
      <form onSubmit={handleSubmit} className={styles['form-wrapper']}>
        <label>Email</label>
        <input type="email" ref={emailRef}></input>
        <label>Password</label>
        <input type="password" ref={passwordRef}></input>
        <button disabled={loading}>Log In</button>
        <div className={styles["page-links"]}>
          <div>
            <Link to="/forgot-password" className={styles["page-link"]}>Forgot your password?</Link>
          </div>
          <div>
            Need an account? <Link to="/signup" className={styles["page-link"]}>Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
