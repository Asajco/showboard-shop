import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyles'
function PopUp(props) {
  const PopUp = styled(Container)`
    position: fixed;
    top: 0;
    right: 0;
    width: 15rem;
    height: 4rem;
    background-color: gray;
    z-index: 99999;
    transition: all 0.5s ease-in-out;
  `
  return (
    <PopUp>
      <p>{props.text}</p>
    </PopUp>
  )
}

export default PopUp
