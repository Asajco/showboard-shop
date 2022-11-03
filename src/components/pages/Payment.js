import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { db } from '../../firebase'
import { setDoc, doc } from 'firebase/firestore'

import CartContext from '../../store/buyContext'
import { useAuth } from '../../store/authContex'

function Payment() {
  const [order, setOrder] = useState({})
  const { cart, totalPriceOfCart } = useContext(CartContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { currentUser } = useAuth()

  const onSubmit = async (data) => {
    console.log(totalPriceOfCart)
    await setDoc(doc(db, 'users', currentUser.email), {
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

  //   useEffect(() => {
  //     if (cart.length === 0) {
  //       navigate('/')
  //     }
  //   }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        fname
        <input {...register('firstName', { required: true })} />
        {errors.firstName?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
        lname
        <input {...register('lastName', { required: true })} />
        {errors.lastName?.type === 'required' && (
          <p role="alert">Last name is required</p>
        )}
        email
        <input {...register('email', { required: true })} />
        {errors.email?.type === 'required' && (
          <p role="alert">Email is required</p>
        )}
        city
        <input {...register('city', { required: true })} />
        {errors.city?.type === 'required' && (
          <p role="alert">City is required</p>
        )}
        pcode
        <input {...register('postalCode', { required: true })} />
        {errors.postalCode?.type === 'required' && (
          <p role="alert">Postal code is required</p>
        )}
        street
        <input {...register('street', { required: true })} />
        {errors.street?.type === 'required' && (
          <p role="alert">Street name is required</p>
        )}
        <select {...register('delivery', {required: true})}>
          <option value="gls">GLS</option>
          <option value="upc">UPC</option>
          <option value="personalTake">Take it in person</option>
        </select>
        {errors.delivery?.type === 'required' && (
          <p role="alert">Delivery type is required</p>
        )}
        <input type="submit" />
      </form>
    </>
  )
}

export default Payment
