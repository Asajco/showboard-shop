import React, { useContext, useEffect, useState } from 'react'
import ItemsContext from '../../store/itemsContext'
import OrderCard from '../OrderCard'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../store/authContex'
import { useNavigate } from 'react-router'
import { db, storage } from '../../firebase'

import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuid } from 'uuid'
import { Container } from '../../styles/GlobalStyles'
import styled from 'styled-components'

function Admin() {
  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    text-align: center;
    height: 30rem;
    width: 70%;
  `
  const { order } = useContext(ItemsContext)
  const [totalPriceOfItems, setTotalPriceOfItems] = useState()
  const [handleOrderShow, setHandleOrderShow] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const getTotalPriceOfItems = () => {
    let total = 0
    order.forEach((item) => {
      total += item.totalPrice
    })
    setTotalPriceOfItems(total)
  }
  const toggleOrders = () => {
    setHandleOrderShow(!handleOrderShow)
  }

  useEffect(() => {
    getTotalPriceOfItems()

    if (currentUser?.email !== 'admin@admin.com') {
      navigate('/')
      alert('You are not authorized to view this page')
    }

    console.log(totalPriceOfItems)
  }, [])

  //add item to firebase
  const addItem = async (data) => {
    const size = data.size.split(',')
    const help = uuid()
    const storageReference = ref(storage, 'images/' + help + data.image[0].name)
    await uploadBytes(storageReference, data.image[0])
    const imageURL = await getDownloadURL(storageReference)
    data.image = imageURL
    if (data.category === 'snowboard') {
      await addDoc(collection(db, 'snowboards'), {
        image: data.image,
        title: data.title,
        brand: data.brand,
        description: data.description,
        size: size,
        price: parseInt(data.price),
      })
    } else if (data.category === 'bindings') {
      await addDoc(collection(db, 'bindings'), {
        image: data.image,
        title: data.title,
        brand: data.brand,
        description: data.description,
        size: size,
        price: parseInt(data.price),
      })
    } else if (data.category === 'boots') {
      await addDoc(collection(db, 'boots'), {
        image: data.image,
        title: data.title,
        brand: data.brand,
        description: data.description,
        size: size,
        price: data.price,
      })
    }
    alert('Congratulation, your item has been added')
  }

  return (
    <div>
      {currentUser !== null && currentUser.email === 'admin@admin.com' ? (
        <div>
          <p>Total price of orders: {totalPriceOfItems}</p>
          <p>count of orders: {order.length}</p>
          <button onClick={toggleOrders}>Show orders</button>
          {handleOrderShow ? (
            <p>
              Every order:
              {order.map((item) => {
                console.log(item.title)
                return (
                  <OrderCard
                    title={item.order.map((item) => item.title)}
                    price={item.totalPrice}
                    id={item.id}
                  />
                )
              })}
            </p>
          ) : null}

          <FormContainer onSubmit={handleSubmit(addItem)}>
            <select {...register('category')}>
              <option value="snowboard">Snowboard</option>
              <option value="bindings">Bindings</option>
              <option value="boots">Boots</option>
            </select>
            <input type="text" {...register('title')} placeholder="Title" />
            <input type="text" {...register('price')} placeholder="Price" />
            <input type="" {...register('brand')} placeholder="Brand" />
            <input
              type="textarea"
              {...register('description')}
              placeholder="Description"
            />
            <input type="text" {...register('size')} placeholder="Size" />
            <input
              type="file"
              {...register('image')}
              placeholder="Select items image"
            />
            <input type="submit" />
          </FormContainer>
        </div>
      ) : (
        navigate('/')
      )}
    </div>
  )
}

export default Admin
