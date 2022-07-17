import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
   }
    
   :focus {
    outline:0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['base-background']};
   }

   body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
   }

   body, input, text-area, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }

   //font-family: 'Baloo 2', cursive;
  //font-family: 'Roboto', sans-serif;
 `;
