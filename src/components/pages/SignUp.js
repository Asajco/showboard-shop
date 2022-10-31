import React, { useState, useRef } from 'react'
import { useAuth } from '../../store/authContex'
import { Link } from 'react-router-dom'
import styles from '../../css/PageWithForm.module.css'

export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()

  async function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  return (
    <div className={styles['page-container']}>
      <h2>SignUp</h2>
      {error && alert(error)}
      <form onSubmit={handleSubmit} className={styles["form-wrapper"]}>
        <label>email</label>
        <input type="email" ref={emailRef}></input>
        <label>email</label>
        <input type="password" ref={passwordRef}></input>
        <label>email</label>
        <input type="password" ref={passwordConfirmRef}></input>
        <div className={styles["page-links"]}>
          Already have an account? <Link to="/signin" className={styles["page-link"]}>Sign In</Link>
        </div>
        <button disabled={loading}>SignUp</button>
      </form>
    </div>
  )
}
