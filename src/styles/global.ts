import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #171717; 
    --gray-60: #212121;
    --gray-40: #333333;
    --gray-30: #444444;
    --gray-20: #828282;
    --white: #F9F9F9;

    --green: #00DF5E
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 62.5%; /* 10px */
    scroll-behavior: smooth;
    color: var(--white);
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }
  
  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 700;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    
    &::-webkit-scrollbar-track {
      background-color: var(--background);
    }

    &::-webkit-scrollbar {
      width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: .3rem;
      background: var(--gray-40);

      &:hover {
        background: var(--gray-30);
      }

      &:active {
        background: var(--gray-20)
      }
    }
  }
  

  button {
    cursor: pointer;
  }

  img {
    image-rendering: pixelated;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  @media (max-width: 680px) {
    .d-none {
      display: none;
      visibility: hidden;
    }
  }
`;
