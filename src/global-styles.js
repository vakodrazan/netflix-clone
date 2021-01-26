import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: "Halvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smothing: antialised;
        -moz-osx-font-smothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;

export default GlobalStyle;