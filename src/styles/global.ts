import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root{
    --blue: #009bde;

  }
  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, button {
    /* font-family: 'Roboto Slab', sans-serif; */
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
