import React from 'react';
import Recipe from "./Recipe";
import styled from "styled-components"

const RecipeList = ({ list }) => {

    return list.map(element => <Recipe recipe={element} />)
}

export default RecipeList