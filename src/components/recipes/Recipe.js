import React, { useState } from 'react';
import styled from "styled-components"
import { ButtonEdit, ButtonDelete } from "../common/Buttons"
import EditRecipeForm from "./forms/EditRecipeForm";
import { useRecipesContext } from "../../contexts/recipes.context";

const Accordion = styled.div`
    font-size: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.color.chocolat};
    
    p {
        font-weight: 700;
        cursor: pointer;
    }
`

const Ingredients = styled.ul``

const Recipe = ({ recipe }) => {
    const [expanded, setExpanded] = useState(false);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const { recipes, setRecipes } = useRecipesContext();

    const toggleExpanded = () => {
        setExpanded(!expanded)
        setEditModalVisible(false)
    }
    const handleEditClick = () => {
        setEditModalVisible(true);
    }
    const handleEditClose = () => {
        setEditModalVisible(false);
    }
    const handleDelete = () => {
        const editedRecipeArray = recipes.filter(el => el.id !== recipe.id);
        setRecipes(editedRecipeArray);
    }

    return <Accordion>
        <p onClick={toggleExpanded}>{recipe.name}</p>
        {expanded &&
            <>
                <Ingredients>
                    {recipe.ingredients.map((el, id) => <li key={el+id}>{el}</li>)}
                </Ingredients>
                <ButtonEdit onClick={handleEditClick}>Edit</ButtonEdit>
                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
                {isEditModalVisible &&
                    <EditRecipeForm
                        recipe={recipe}
                        onClose={handleEditClose}
                    />
                }
            </>
        }
    </Accordion>
}

export default Recipe