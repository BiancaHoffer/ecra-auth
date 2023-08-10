import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    textarea:focus, input:focus, select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    } 

    a {
      color: inherit;
      text-decoration: none;
    
      &:hover {
        text-decoration: none;
      }
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
`;