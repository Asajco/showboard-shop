import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyles'
import { Link } from 'react-router-dom'
import PopUp from './PopUp'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeFill,
} from 'react-icons/bs'
import { colors } from '../styles/Colors'
function Footer() {
  const [isPop, setIsPopUp] = useState(false)

  const Footer = styled(Container)`
    flex-direction: row;
    height: 7rem;
    background-color: ${colors.primaryColor};
    padding-bottom: 2rem;
  `
  const Heading = styled.h1`
    font-size: 1.1rem;
  `
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0rem 8rem;
    & > a {
      text-decoration: none;
      color: black;
      font-size: 0.8rem;
    }
    & > form {
      height: 5rem;
      display: flex;
      align-items: center;
    }
    & > form > input {
      padding: 0.15rem;
      padding-left: 0.5rem;
      outline: none;
    }
  `
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .icon {
      color: black;
      width: 30px;
      height: 30px;
      margin: 0.5rem;
      &:first-child{
      margin-left: 0rem;
    }
    }
    
    
  `
  const handleSubmit = () => {
    setIsPopUp(true)
    setTimeout(() => {
      window.scrollTo(0, 0)
      setIsPopUp(false)
    }, 3000)
  }

  return (
    <Footer>
      <Column>
        <Heading>Sign up for newsletter</Heading>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your email" />
          <BsFillEnvelopeFill size={23} />
        </form>
      </Column>
      <Column>
        <Heading>Contact us</Heading>
        <Link to="/contact">Contact us</Link>
        <Link to="/contact">About us</Link>
      </Column>
      <Column>
        <Heading>Help center</Heading>
        <Link to="/help">Returns</Link>
        <Link to="/help">Shipping policy</Link>
        <Link to="/help">FAQ</Link>
      </Column>
      <Column>
        <Heading>Socials</Heading>
        <Row>
          <a
            href="https://www.google.sk/?hl=sk"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://www.google.sk/?hl=sk"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="icon" />
          </a>
          <a
            href="https://www.google.sk/?hl=sk"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="icon" />
          </a>
        </Row>
      </Column>
      {isPop && <PopUp text="Thanks for subsribtion!" />}
    </Footer>
  )
}

export default Footer
