import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { colors } from "./Colors";
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
    &:hover{
        background-color: ${colors.hoverButton};
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default GlobalStyles