import React, { useState } from 'react';
import styled from "styled-components"
import RecipeForm from "./RecipeForm";
import Backdrop from "./components/common/Backdrop"


const FormWrapper = styled.div`
    background-color: white;
`

const AddRecipeForm = () => {
    const handleRecipeAddition = () => {}

    return <Backdrop>
        <FormWrapper>
            <h1>Add a recipe</h1>
            <RecipeForm submitButton={"Add"} onSubmit={handleRecipeAddition} />
        </FormWrapper>

    </Backdrop>
}

export default AddRecipeForm