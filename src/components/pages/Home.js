import React, { useContext } from 'react'
import styles from '../../css/Home.module.css'
import { Link } from 'react-router-dom'
import ItemsContext from '../../store/itemsContext'
function Home() {

  
  
  return (
    <div className={styles['home-container']}>
      <Link to="/admin">riť</Link>
    </div>
  )
}

export default Home
