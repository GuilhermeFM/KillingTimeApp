import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    min-width: 360;
    min-height: 730;
  }

  html, body {
    height: 100%;
    color: #000;
    background: #e9e9e9;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', Helvetica, sans-serif;
    font-weight: 300;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
