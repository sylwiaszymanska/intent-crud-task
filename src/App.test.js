import React from 'react';
import { render, fireEvent, findAllByRole, findByText, findAllByText } from '@testing-library/react';
import { ThemeProvider }   from "styled-components";
import App from './App';
import theme from "./theme"
import Recipe from "./components/recipes/Recipe";

export function renderWithTheme(ui, options) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)
}

const renderRecipe= (props) =>
    renderWithTheme(<Recipe {...props} />)

test('renders Add Recipe button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/add recipe/i);
  expect(buttonElement).toBeInTheDocument();
});

const exampleRecipe = { recipe: { id: 1, name: "Example recipe", ingredients: ["salt", "pepper", "basil", "onion", "sage"]}};

test('renders all ingredients in a recipe after click', async () => {
  const { getByText, container } = renderRecipe(exampleRecipe);
  const recipeTitle = getByText("Example recipe")
  fireEvent.click(recipeTitle);
  const ingredients = await findAllByRole(container, "listitem")

  expect(ingredients).toHaveLength(5);
});

test('renders Delete and Edit buttons', async () => {
  const { getByText, container } = renderRecipe(exampleRecipe);
  const recipeTitle = getByText("Example recipe");
  fireEvent.click(recipeTitle);

  const deleteButton = await findAllByText(container,/delete/i);
  const editButton = await findAllByText(container,/edit/i);

  expect(deleteButton).toHaveLength(1);
  expect(editButton).toHaveLength(1);

});