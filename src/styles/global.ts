import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

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
    min-width: 480;
    min-height: 700px;
  }

  html, body {
    height: 100%;
    color: #000;
    background: #e9e9e9;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: cursive;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
