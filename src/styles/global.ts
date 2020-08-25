import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

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
    min-height: 440px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #eeeeee;
      border: 1px solid #eeeeee;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${shade(0.2, '#c3c3c3')};
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${shade(0.3, '#c3c3c3')};
    }
  }

  html, body {
    height: 100%;
    color: #000;
    background: #e9e9e9;
    overflow: hidden;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
