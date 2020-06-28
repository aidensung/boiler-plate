import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {    
    padding: 0;    
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
