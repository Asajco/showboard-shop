import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsShop } from 'react-icons/bs'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyles'
import {colors} from "../styles/Colors"

function ShopLayout() {
  const ShopLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    transition: 0.25s;
    
    &:hover{
      color: ${colors.hoverButton}
    }
  `
  const Icon = styled(BsShop)`
    margin-top: 3rem
  `
  const Links = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    margin: 2.5rem 0rem 0rem -2.3rem;
  `
  return (
    <Container>
      <Icon size={40} className="icon"/>
      <Links>
        <ShopLink to="/shop/snowboards">Snowboards</ShopLink>
        <ShopLink to="/shop/bindings">Bindings</ShopLink>
        <ShopLink to="/shop/boots">Boots</ShopLink>
      </Links>
      <Outlet />
    </Container>
  )
}

export default ShopLayout
