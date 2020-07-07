import RecipeList from "./components/recipes/RecipeList";
import Modal from "./components/recipes/Modal";
import React from "react";
import styled from "styled-components";
import { ButtonStyles } from "./components/common/Buttons";
import { useRecipesContext } from "./contexts/recipes.context";

const Title = styled.h1`
    text-align: center;
`

const AddRecipeButton = styled.button`
  ${ButtonStyles};
  background-color: ${({ theme }) => theme.color.cafeNoir};
  color: white;
  margin-top: 40px;
`

const Main = () => {
    const { isModalVisible, setModalVisible } = useRecipesContext();
    const handleAddRecipe = () => {
        if (!isModalVisible) {
            setModalVisible(true);
        }
    };

    return <>
        <Title>Recipe List</Title>
        <RecipeList />
        <AddRecipeButton onClick={handleAddRecipe}>Add recipe</AddRecipeButton>
        <Modal />
        </>
}

export default Main;