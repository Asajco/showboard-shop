import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { colors } from './Colors'
import { Link } from 'react-router-dom'
const GlobalStyles = createGlobalStyle`

    code{
        font-family: "Roboto", sans-serif
    }
`
export const Button = styled.button`
  width: 80%;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  align-self: center;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  background-color: ${colors.primaryButton};
  transition: 0.2s;
  &:hover {
    background-color: ${colors.hoverButton};
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Box = styled(Container)`
  justify-content: space-evenly;
  background-color: ${colors.primaryColor};
  margin: 1rem;
  padding: 1rem;
  border: 1.5px solid ${colors.primaryBlack};
  border-radius: 0.3rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`
export const _Link = styled(Link)`
  color: ${colors.primaryBlack};
  font-size: 1.2rem;
  text-decoration: none;
  &:hover{
    color: ${colors.hoverButton}
  }
`

export default GlobalStyles
