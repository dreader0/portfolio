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

  .card {
    background-color: ${({ theme }) => theme.bg};
    transition: all .25s linear
  }

  .abCard {
    background-color: ${({ theme }) => theme.bg};
    transition: all .25s linear;
  }

  .wtCard {
    background-color: ${({ theme }) => theme.bg};
    transition: all .25s linear;
  }

  .homeCard {
    background-color: ${({ theme }) => theme.bg};
    transition: all .25s linear;
  }

  
  `