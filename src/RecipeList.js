import React from 'react';
import Recipe from "./Recipe";

const RecipeList = ({ list }) => {

    return list.map(element => <Recipe recipe={element} />)
}

export default RecipeList