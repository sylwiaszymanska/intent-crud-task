import React from 'react';
import { useRecipesContext } from "./recipes.context";
import AddRecipeForm from "./AddRecipeForm";
import Backdrop from "./components/common/Backdrop";

const Modal = () => {
    const { isModalVisible } = useRecipesContext();

    return isModalVisible &&
        <>
            <AddRecipeForm />
            <Backdrop />
        </>
}

export default Modal