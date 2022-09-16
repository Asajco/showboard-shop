import React, { useState, useRef } from 'react'
import { useAuth } from '../../store/authContex'
import { Link, useNavigate } from 'react-router-dom'

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
      navigate("/signin")
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }
  return (
    <>
      <h2>Passwords Reset</h2>
      {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input type="email" ref={emailRef}></input>
        <label>email</label>
       

        <button disabled={loading}>Reset password</button>
      </form>
      <div>
      <Link to="/signin">Login</Link>
      </div>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

