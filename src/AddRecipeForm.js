import React from 'react';
import styled from "styled-components"
import RecipeForm from "./RecipeForm";
import { useRecipesContext } from "./recipes.context";


const FormWrapper = styled.div`
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
`

const getUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

const formatIngredients = (ingredients) => ingredients.split(",")

const AddRecipeForm = () => {
    const { recipes, setRecipes, setModalVisible } = useRecipesContext();

    const handleRecipeAddition = (data) => {
        const { name, ingredients } = data;
        const newRecipe = { id: getUniqueId(), name, ingredients: formatIngredients(ingredients)};
        setRecipes([...recipes, newRecipe ])
        setModalVisible(false)
    }

    const handleClose = () => {
        setModalVisible(false)
    }

    return <FormWrapper>
            <h1>Add a recipe</h1>
            <RecipeForm onClose={handleClose} submitButton={"Add"} onSubmit={handleRecipeAddition} />
        </FormWrapper>

}

export default AddRecipeForm