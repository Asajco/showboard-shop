import React from 'react'
import { Container } from '../../styles/GlobalStyles'
import styled from 'styled-components'
import { colors } from '../../styles/Colors'
function Help() {
  const HelpContainer = styled(Container)`
    line-height: 1.5;
  `
  const Text = styled.p`
    width: 70%;
    text-align: justify;
  `
  const Heading = styled.h1`
    margin-bottom: 1.2rem;
  `
  const SmallHeading = styled(Heading)`
    font-size: 1.2rem;
  `
  const HelpTable = styled.ul`
    width: 70%;
    list-style: none;
  `
  const HelpTableRow = styled.li`
    width: 100%;
    height: 3rem;
    display: flex;
    padding-left: 0.5rem;
    align-items: center;
    &:first-child {
      background-color: ${colors.tableEven};
    }
    &:last-child {
      background-color: ${colors.tableOdd};
    }
  `
  const Adress = styled.div`
   align-items: center;
  `

  return (
    <HelpContainer>
      <Heading>Returns</Heading>
      <Text>
        You have 30 days from the date of delivery to return product(s) you
        bought on this site are free of charge.** You can use the returns portal
        below to start a return for your online purchase. Please note, you will
        need your order number, which can be found in your order confirmation
        email, and the email address used to place the online order. One you
        hace completed the returns process, lean back and relax. We will notify
        you via email once your return is received at our warehouse. From
        receipt of this email, it will take approximately 10 workdays until the
        money will show in your bank account.
      </Text>
       <Adress>
        <Text>Tajovského 40</Text>
        <Text>952 08 Banská Bystrica</Text>
        <Text>Slovakia</Text>
      </Adress> 
      <Heading>Shipping policy</Heading>
      <Text>Order above 100€ are free delivery</Text>
      <Text>
        Orders are shipped on business days only. Business days are Monday to
        Friday, excluding national holidays.
      </Text>
      <SmallHeading>Example of delivery</SmallHeading>
      <HelpTable>
        <HelpTableRow>
          Ordered on Monday - Latest Delivery Date Friday
        </HelpTableRow>
        <HelpTableRow>
          Ordered on Friday / Saturday / Sunday - Latest Delivery Date Thursday
        </HelpTableRow>
      </HelpTable>
      <Heading>FAQ</Heading>
    </HelpContainer>
  )
}

export default Help
