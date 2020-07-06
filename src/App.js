import React from 'react';
import RecipeList from "./RecipeList";

const recipes = [{ id: 1, name: "spaghetti", ingredients: ["onion", "tomato", "potato"]}, { id: 2, name: "soup", ingredients: ["basil", "tomato"]} ]


function App() {
    
    const handleAddRecipe = () => {};

    return (
        <div className="App">
            <RecipeList list={recipes}/>
            <button onClick={handleAddRecipe}>Add recipe</button>
        </div>
    );
}

export default App;
