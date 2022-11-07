import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CartContext from '../../store/buyContext'
import { useAuth } from '../../store/authContex'
import Image from '../../assets/empty-cart.png'
import Placeholder from '../../assets/placeholder.jpeg'
import styles from '../../css/Payment.module.css'
import Spinner from '../Spinner'
function Payment() {
  const { cart, totalPriceOfCart, setCount, setCart } = useContext(CartContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { currentUser } = useAuth()

  const onSubmit = async (data) => {
    setCount(0)
    setCart('')
    navigate('/accepted')
    console.log(totalPriceOfCart)
    await addDoc(collection(db, 'users'), {
      user: currentUser.email,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      street: data.street,
      postalCode: data.postalCode,
      city: data.city,
      delivery: data.delivery,
      order: cart,
      totalPrice: totalPriceOfCart,
    })
  }

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/')
    }
  }, [])

  return (
    <div className={styles['payment-container']}>
      <LazyLoadImage
        src={Image}
        placeholder={<Spinner />}
        className={styles['payment-image']}
        width={400}
      />
      <div className={styles['payment-form-container']}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles['payment-form-wrapper']}
        >
          <label>First name</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName?.type === 'required' && (
            <p role="alert">First name is required</p>
          )}
          <label>Last name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName?.type === 'required' && (
            <p role="alert">Last name is required</p>
          )}
          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.email?.type === 'required' && (
            <p role="alert">Email is required</p>
          )}
          <label>City </label>
          <input {...register('city', { required: true })} />
          {errors.city?.type === 'required' && (
            <p role="alert">City is required</p>
          )}
          <label>Postal code</label>
          <input {...register('postalCode', { required: true })} />
          {errors.postalCode?.type === 'required' && (
            <p role="alert">Postal code is required</p>
          )}
          <label>Street</label>
          <input {...register('street', { required: true })} />
          {errors.street?.type === 'required' && (
            <p role="alert">Street name is required</p>
          )}
          <label>Select delivery type </label>
          <select {...register('delivery', { required: true })}>
            <option value="gls">GLS</option>
            <option value="upc">UPC</option>
            <option value="personalTake">Take it in person</option>
          </select>
          {errors.delivery?.type === 'required' && (
            <p role="alert">Delivery type is required</p>
          )}
          <button type="submit" className={styles['payment-form-btn']}>
            Send order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Payment
