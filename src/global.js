import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  a:hover {
    color: ${({ theme }) => theme.accent};
  }

  nav {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  nav:hover {
    color: ${({ theme }) => theme.accent};
  }

  p: {
    transition: all 0.25s linear;
  }
  `