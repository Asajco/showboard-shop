import React, { useContext } from 'react'
import ItemsContext from '../../store/itemsContext'

const Snowboards = () => {
  const { snowboards } = useContext(ItemsContext)

  return (
    <>
      <div>Snowboards</div>
      {snowboards ? <div>
        {snowboards.map((snowboard)=>{
          return <p>{snowboard.title}</p>
        })}
      </div> : <div>Loading...</div>}
    </>
  )
}

export default Snowboards
