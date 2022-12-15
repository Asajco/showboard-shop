import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { getDocs, collection, query } from 'firebase/firestore'
import { useAuth } from './authContex'

const ItemsContext = React.createContext()

export const ItemsContextProvider = (props) => {
  const [snowboards, setSnowboards] = useState(null)
  const [bindings, setBindings] = useState([])
  const [boots, setBoots] = useState([])
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(false)

  const getSnowboards = async () => {
    const querySnapshot = await getDocs(collection(db, 'snowboards'))

    setSnowboards(
      querySnapshot.docs.map((doc) => {
        return doc.data()
      }),
    )
  }

  const getBindings = async () => {
    const querySnapshot = await getDocs(collection(db, 'bindings'))

    setBindings(querySnapshot.docs.map((doc) => doc.data()))
  }
  const getBoots = async () => {
    const querySnapshot = await getDocs(collection(db, 'boots'))

    setBoots(querySnapshot.docs.map((doc) => doc.data()))
  }
  const getOrders = async () => {
   
    const q = query(
      collection(db, 'users'),
    
    )
    const querySnapshot = await getDocs(q)
    setOrder(
      querySnapshot.docs.map((doc) => {
        
        return doc.data()
      }),
    )
  }

  useEffect(() => {
    setLoading(true)
    getSnowboards()
    getBindings()
    getBoots()
    getOrders()
    setLoading(false)
    console.log(order)
  }, [])

  return (
    <ItemsContext.Provider
      value={{
        snowboards: snowboards,
        bindings: bindings,
        boots: boots,
        order: order,
       
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}
export default ItemsContext
