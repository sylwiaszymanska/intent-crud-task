import RecipeList from "./RecipeList";
import Modal from "./Modal";
import React from "react";
import styled from "styled-components";
import {ButtonStyles} from "./components/common/Buttons";
import {useRecipesContext} from "./recipes.context";

const Title = styled.h1`
    text-align: center;
`

const AddRecipeButton = styled.button`
  ${ButtonStyles};
  background-color: ${({ theme }) => theme.color.blush};
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