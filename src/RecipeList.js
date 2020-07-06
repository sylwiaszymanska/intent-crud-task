import React from 'react';
import Recipe from "./Recipe";
import styled from "styled-components"

const RecipeList = ({ recipes }) => {
    return recipes.map(element => <Recipe recipe={element} />)
}

export default RecipeList