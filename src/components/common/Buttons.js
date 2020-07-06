import styled, {css} from "styled-components";

export const ButtonStyles = css`
    text-transform: uppercase;
    border: none;
    padding: 10px 30px;
    margin: 15px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.cafeNoir};
    font-family: 'Fredericka the Great', cursive;
    font-size: 16px;
`
export const ButtonSubmit = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.nude};
`
export const ButtonClose = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.blush};
`
export const ButtonEdit = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.chocolat};
`
export const ButtonDelete = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.blush};
`