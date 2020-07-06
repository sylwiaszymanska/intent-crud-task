import React from 'react';
import styled from "styled-components"
import RecipeForm from "./RecipeForm";
import {useRecipesContext} from "./recipes.context";

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

const formatIngredients = (ingredients) => ingredients.split(",")

const EditRecipeForm = ({ recipe, onClose }) => {
    const { recipes, setRecipes } = useRecipesContext();

    const handleSubmit = (data) => {
        const { id, name, ingredients } = data;
        const newRecipe = { id, name, ingredients: formatIngredients(ingredients)}
        const editedRecipeArray = recipes.map(el => el.id === id ? newRecipe : el);
        setRecipes(editedRecipeArray);
        onClose();
    }

    return <FormWrapper>
            <h1>Edit recipe</h1>
            <RecipeForm
                recipe={recipe}
                submitButton={"Edit"}
                onClose={onClose}
                onSubmit={handleSubmit}
            />
        </FormWrapper>
}

export default EditRecipeForm