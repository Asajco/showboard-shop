import React, { useState, useRef } from 'react'
import { useAuth } from '../../store/authContex'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../../css/PageWithForm.module.css'

export default function ForgotPassword() {
  const emailRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      navigate('/signin')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }
  return (
    <div className={styles['page-container']}>
      <h2>Passwords Reset</h2>
      {error && alert(error)}
      <form onSubmit={handleSubmit} className={styles['form-wrapper']}>
        <label>email</label>
        <input type="email" ref={emailRef}></input>
        <button disabled={loading}>Reset password</button>
        <div className={styles["page-links"]}>
          <div>
            <Link to="/signin" className={styles["page-link"]}>Login</Link>
          </div>
          <div>
            Need an account? <Link to="/signup" className={styles["page-link"]}>Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
