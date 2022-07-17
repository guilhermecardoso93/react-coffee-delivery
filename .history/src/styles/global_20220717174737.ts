import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
    
   
   body {
    background-color: ${(props) => props.theme.colors["background"]};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;

    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    
   }

   body, input, text-area, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }
 `;
