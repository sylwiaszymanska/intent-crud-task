import React, {useState} from 'react';


const AddRecipeForm = ({ list }) => {
    const [name, setName] = useState()
    const [ingredients, setIngredients] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value)
    }

    return <form>
        <input name={"name"} value={name} onChange={handleNameChange} />
        <input name={"ingredients"} value={ingredients} onChange={handleIngredientsChange} />

    </form>
}

export default AddRecipeForm