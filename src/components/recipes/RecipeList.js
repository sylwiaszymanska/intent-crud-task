import React from 'react';
import Recipe from "./Recipe";
import { useRecipesContext } from "../../contexts/recipes.context";

const RecipeList = () => {
    const { recipes } = useRecipesContext();

    return recipes.map(element => <Recipe key={element.name} recipe={element} />)
}

export default RecipeList