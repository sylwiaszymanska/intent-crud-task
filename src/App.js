import React, { useState } from 'react';
import RecipeList from "./RecipeList";
import styled, { ThemeProvider }   from "styled-components";
import theme from "./theme"
import AddRecipeForm from "./AddRecipeForm";

const recipes = [{ id: 1, name: "spaghetti", ingredients: ["onion", "tomato", "potato"]}, { id: 2, name: "soup", ingredients: ["basil", "tomato"]} ]

const AppWrapper = styled.div`
    min-height: 100vh;
    max-width: 1600px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.macaron};
    color: ${({ theme }) => theme.color.cafeNoir};

`

const Title = styled.h1`
    text-align: center;
    
`

function App() {
    const [isModalVisible, setModalVisible] = useState(false)
    const handleAddRecipe = () => {
        if (!isModalVisible) {
            setModalVisible(true);
        }
    };

    return (
        <ThemeProvider theme={theme} >
            <AppWrapper>
                <Title>Recipe List</Title>
                <RecipeList list={recipes}/>
                <button onClick={handleAddRecipe}>Add recipe</button>
                {isModalVisible && <AddRecipeForm />}
            </AppWrapper>
        </ThemeProvider>

    );
}

export default App;
