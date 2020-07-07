import React from 'react';
import { useRecipesContext } from "../../contexts/recipes.context";
import AddRecipeForm from "./forms/AddRecipeForm";
import Backdrop from "../common/Backdrop";

const Modal = () => {
    const { isModalVisible } = useRecipesContext();

    return isModalVisible &&
        <>
            <AddRecipeForm />
            <Backdrop />
        </>
}

export default Modal