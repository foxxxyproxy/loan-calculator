import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
  
    --main-text-color: #6d6b6b;
    --main-background-color: #ffffff;
    color: var(--main-text-color);
    
  
    --light-gray: #e4e7ec;
    --blue-gray: #dfe8f0;
    --light-blue: #2589be;
    --light-red: #e45c4a;
  
    --btn-background: linear-gradient(
      45deg,
      rgba(0, 212, 255, 1) 0%,
      rgba(37, 137, 190, 1) 30%,
      rgba(37, 137, 190, 1) 70%,
      rgba(0, 212, 255, 1) 100%
    );
  
    --btn-background-error: linear-gradient(
      45deg,
      rgba(237, 155, 183, 1) 0%,
      rgb(179, 37, 54) 30%,
      rgb(179, 37, 54) 70%,
      rgba(237, 155, 183, 1) 100%
    );
  }
  
  body {
    height: 100vh;
    background: #f0f0f0;
  }
  
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
`;
