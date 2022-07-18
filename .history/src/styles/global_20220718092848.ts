import { createGlobalStyle } from "styled-components";
import { px2vw } from "../utils/px2vw";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  :root {
      font-size: ${px2vw(16)};

      @media (min-width: 768px) {
        font-size: ${px2vw(14)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(12)};
      }
    }
  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["brand-purple"]}
  }
`;
