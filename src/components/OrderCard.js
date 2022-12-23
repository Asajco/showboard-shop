import React from 'react'
import styled from 'styled-components'
function OrderCard(props) {
  const OrderCard = styled.div`
    width: 200%;
    border-bottom: 2px solid black;
    margin: 0rem 0rem 1.5rem 3rem;
    padding-bottom: 0.5rem;
    h4 {
      font-size: 1.2rem;
      margin: 0.5rem 0rem;
    }
  `
  return (
    <OrderCard>
      <h4>Items:</h4>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.size}</p>
      <h4>Total Price: </h4>
      <p>{props.price} €</p>
    </OrderCard>
  )
}

export default OrderCard
