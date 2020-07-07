import React, { useState } from 'react';
import styled from "styled-components"
import {ButtonClose, ButtonSubmit} from "../../common/Buttons";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px 50px 50px;
    align-items: flex-start;
    
    label {
      font-size: 20px;
      font-family: 'Fredericka the Great', cursive;
      margin-bottom: 15px;
    }
    input {
      width: 100%;
      font-size: 20px;
      color: ${({ theme }) => theme.color.cafeNoir};
      font-family: 'Amatic SC', cursive;
      padding: 5px 10px;
      margin-bottom: 15px;
      border: none;
    }
`
const RecipeForm = ({ recipe, submitButton, onClose, onSubmit }) => {
    const [name, setName] = useState(recipe ? recipe.name : "");
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients.join(",") :  "");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    }
    const handleFormClose = () => {
        onClose();
    }
    const handleFormSubmit = () => {
        onSubmit({ name, ingredients, id: recipe?.id });
    }

    return <Form>
        <label htmlFor={"name"}>Recipe name</label>
        <input id={"name"}
            name={"name"}
            value={name}
            placeholder={"Recipe Name"}
            onChange={handleNameChange} />
        <label htmlFor={"ingredients"}>Ingredients</label>
        <input
            id={"ingredients"}
            name={"ingredients"}
            value={ingredients}
            placeholder={"Enter Ingredients,Separated By,Commas"}
            onChange={handleIngredientsChange} />
        <ButtonSubmit type={"button"} onClick={handleFormSubmit}>{submitButton}</ButtonSubmit>
        <ButtonClose type={"button"} onClick={handleFormClose}>Close</ButtonClose>
    </Form>
}

export default RecipeForm