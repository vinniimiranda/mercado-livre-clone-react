import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
  }
  
  body{
    background: #EBEBEB;
    -webkit-font-smoothing: antialiased;
  }

  
  button{
    cursor: pointer;
  }
`;
