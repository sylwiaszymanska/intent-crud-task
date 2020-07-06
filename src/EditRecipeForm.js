import React, { useState } from 'react';
import styled from "styled-components"
import RecipeForm from "./RecipeForm";
import Backdrop from "./components/common/Backdrop"

const FormWrapper = styled.div`
    background-color: white;
`

const AddRecipeForm = () => {

    return <Backdrop>
        <FormWrapper>
            <h1>Edit recipe</h1>
            <RecipeForm submitButton={"Edit"} />
        </FormWrapper>
    </Backdrop>
}

export default AddRecipeForm