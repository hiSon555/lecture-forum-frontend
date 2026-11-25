import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color : ${props => props.theme.color.background.default};
        color: ${props => props.theme.color.text.default};
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }
    
    input, textarea {
        font-family: inherit;
        
        &:hover {
            outline: none;
        }
    }
    
    ul li {
        list-style: none;
    }
`
export default GlobalStyle;