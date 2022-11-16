import React, { useState } from 'react'
import styles from '../css/ItemPage.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
function ItemPage(props) {
  // const [isActive, setIsActive] = useState(false)

  // const SizeButton = styled.button(props=>({
  //   backgroundColor: isActive ? 'black' : 'white',
  // }))
  // const handleButtonChange = () =>{
  //   setIsActive(!isActive)
  // }    
  
  return (
    <div className={styles['item-page-wrapper']}>
      <LazyLoadImage
        src={props.image}
        className={styles['item-page-wrapper-image']}
      />
      <div className={styles['item-page-about-item-wrapper']}>
        <h2>{props.title}</h2>
        <label>{props.brand}</label>
        <p>{props.description}</p>
        <div className={styles['item-page-sizes']}>
          <h4>Sizes:</h4>
          {props.size}
        </div>
        {/* <SizeButton isActive={true} onClick={handleButtonChange}/>
        <SizeButton /> */}
        <p className={styles['item-page-price']}>{props.price + ' €'}</p>
        <button onClick={props.onClick} className={styles['item-page-btn']}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ItemPage
