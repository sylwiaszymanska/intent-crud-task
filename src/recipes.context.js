import React, {
    createContext,
    useContext,
    useState,
} from "react";

const mockedData = [{ id: 1, name: "spaghetti", ingredients: ["onion", "tomato", "potato"]}, { id: 2, name: "soup", ingredients: ["basil", "tomato"]} ];

const defaultState = {
    recipes: mockedData,
    setRecipes: () => null,
    isModalVisible: false,
    setModalVisible: () => null,
}

const RecipesContext = createContext(defaultState)
const useRecipesContext = () => useContext(RecipesContext)

const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState(mockedData);
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <RecipesContext.Provider
            value={{
                recipes, setRecipes, isModalVisible, setModalVisible
            }}
        >
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesContext;
export { RecipesProvider, useRecipesContext };

