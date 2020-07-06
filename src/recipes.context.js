import React, {
    createContext,
    useContext,
    useState,
} from "react";

const mockedData = [
    { id: 1, name: "spaghetti", ingredients: ["onion", "tomato", "potato"]},
    { id: 2, name: "soup", ingredients: ["basil", "tomato"]}
    ];

const isLocalStorageAvailable = () => typeof window !== "undefined"
const useStateWithLocalStorage = (
    localStorageKey
) => {
    const key = `crud-` + localStorageKey
    const [value, setValue] = useState(
        () => (isLocalStorageAvailable() && JSON.parse(localStorage.getItem(key))) || []
    )

    const storeValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }

    return [value, storeValue]
}

const defaultState = {
    recipes: mockedData,
    setRecipes: () => null,
    isModalVisible: false,
    setModalVisible: () => null,
}

const RecipesContext = createContext(defaultState)
const useRecipesContext = () => useContext(RecipesContext)

const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useStateWithLocalStorage("recipes");
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

