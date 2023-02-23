import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;

        height: auto;
        background: linear-gradient(180deg, #4D92D2 0%, #6918A9 97.47%);
    }
`
