import React, { useState, useRef } from 'react'
import { useAuth } from '../../store/authContex'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../../css/PageWithForm.module.css'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { currentUser, updateEmail, updatePassword } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    const promises = []
    setLoading(true)
    setError('')
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    Promise.all(promises)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div className={styles['page-container']}>
      <h2>Update Profile</h2>
      {error && alert(error)}
      <form onSubmit={handleSubmit} className={styles['form-wrapper']}>
        <label>email</label>
        <input
          type="email"
          ref={emailRef}
          defaultValue={currentUser.email}
        ></input>
        <label>email</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Leave blank to keep the same"
        ></input>
        <label>email</label>
        <input
          type="password"
          ref={passwordConfirmRef}
          placeholder="Leave blank to keep the same"
        ></input>
        <button disabled={loading}>Update</button>
        <div className={styles["page-links"]}>
          <Link to="/profile" className={styles["page-link"]}>Cancel</Link>
        </div>
      </form>
    </div>
  )
}
