import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Placeholder from '../assets/placeholder.jpeg'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyles'
import { colors } from '../styles/Colors'
function Card(props) {
  const Card = styled(Container)`
    position: relative;
    width: 275px;
    height: 400px;
    border: 2px solid black;
    margin: 0rem 1rem 2rem 1rem;

    h1 {
      margin: -0.5rem 0rem 1rem 0rem;
      font-size: 1.25rem;
      padding: 0rem 1rem 0rem 1rem;
    }
    img {
      width: 220px;
      height: 250px;
    }
  `
  const CardLower = styled(Container)`
    width: 100%;
    margin-top: 1.5rem;
    p {
      margin: 0.25rem 0rem 0.25rem 0rem;
      font: bold 1.05rem 'Roboto', sans-serif;
    }
  `
  const CardLink = styled(Link)`
    position: absolute;
    bottom: 0;
    margin-top: 0.8rem;
    text-decoration: none;
    color: black;
    font: 500 1.2rem 'Roboto', sans-serif;
    transition: 0.25s;
    &:hover {
      color: ${colors.hoverButton};
    }
  `
  return (
    <Card>
      <h1>{props.title}</h1>
      <LazyLoadImage
        src={props.image}
        effect="blur"
        placeholderSrc={Placeholder}
      />
      <CardLower>
        <p>{props.price} €</p>
        <CardLink to={props.link}>View more</CardLink>
      </CardLower>
    </Card>
  )
}

export default Card
