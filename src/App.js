import React from 'react';
import styled, { ThemeProvider }   from "styled-components";
import theme from "./theme"
import { RecipesProvider } from "./recipes.context";
import Main from "./Main";

const AppWrapper = styled.div`
    min-height: 100vh;
    max-width: 1600px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.macaron};
    color: ${({ theme }) => theme.color.cafeNoir};
`

function App() {

    return (
        <RecipesProvider>
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Main />
                </AppWrapper>
            </ThemeProvider>
        </RecipesProvider>
    );
}

export default App;
