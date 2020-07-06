import React, {
    createContext,
    useContext,
    useState,
} from "react";

const mockedData = [{ id: 1, name: "spaghetti", ingredients: ["onion", "tomato", "potato"]}, { id: 2, name: "soup", ingredients: ["basil", "tomato"]} ];

const defaultState = {
    recipes: mockedData,
    setRecipes: () => null,
}

const RecipesContext = createContext(defaultState)
const useRecipesContext = () => useContext(RecipesContext)

const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState();

    return (
        <RecipesContext.Provider
            value={{
                recipes, setRecipes
            }}
        >
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesContext;
export { RecipesProvider, useRecipesContext };

