import React from "react";
import RecipeForm from "./RecipeForm";
import { useRecipesContext } from "../../../contexts/recipes.context";
import FormWrapper from "../../common/FormWrapper";

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