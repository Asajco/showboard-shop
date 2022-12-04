import React, { useContext, useEffect, useState } from 'react'
import ItemsContext from '../../store/itemsContext'
import OrderCard from '../OrderCard'
import { getAuth } from 'firebase/auth'
import { useAuth } from '../../store/authContex'
import { useNavigate } from 'react-router'

function Admin() {
  const { order } = useContext(ItemsContext)
  const [totalPriceOfItems, setTotalPriceOfItems] = useState()
  const [handleOrderShow, setHandleOrderShow] = useState(false)
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

  return (
    <div>
      {currentUser!==null && currentUser.email === 'admin@admin.com' ? (
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
                  />
                )
              })}
            </p>
          ) : null}
        </div>
      ) : (
        navigate('/')
      )}
    </div>
  )
}

export default Admin
