import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'



const ItemsContext = React.createContext()

export const ItemsContextProvider = (props) => {
  const [snowboards, setSnowboards] = useState(null)
  const [bindings, setBindings] = useState([])
  const [boots, setBoots] = useState([])
  

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

  useEffect(() => {
    getSnowboards()
    getBindings()
    getBoots()
  }, [])

  return (
    <ItemsContext.Provider
      value={{
        snowboards: snowboards,
        bindings: bindings,
        boots: boots,
        
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}
export default ItemsContext
