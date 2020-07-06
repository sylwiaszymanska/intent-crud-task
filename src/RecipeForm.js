import React, { useState } from 'react';
import styled, { css } from "styled-components"


const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: black;
    width: 500px;
    padding: 20px 50px 50px;
    align-items: flex-start;
`
const ButtonStyles = css`
    text-transform: uppercase;
    width: 100px;
    border: none;
    padding: 10px 30px;
    margin: 15px;
`
const ButtonSubmit = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.chocolat};
`
const ButtonClose = styled.button`
    ${ButtonStyles};
    background-color: ${({ theme }) => theme.color.blush};
`

const RecipeForm = ({ recipe, submitButton, onClose }) => {
    const [name, setName] = useState()
    const [ingredients, setIngredients] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value)
    }

    const handleFormClose = () => {}

    return <Form>
        <label for={"name"}>Recipe name</label>
        <input id={"name"} name={"name"} value={name} onChange={handleNameChange} />
        <label for={"ingredients"}>Ingredients</label>
        <input id={"ingredients"} name={"ingredients"} value={ingredients} onChange={handleIngredientsChange} />
        <ButtonSubmit>{submitButton}</ButtonSubmit>
        <ButtonClose onClick={handleFormClose}>Close</ButtonClose>
    </Form>
}

export default RecipeForm