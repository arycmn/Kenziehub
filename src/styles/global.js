import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Offside", cursive;
    }

    body {
        background-color: #ffebd4;
    }

    ::-webkit-scrollbar {
            width: 8px;
        }
  
        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: rgba(0,0,0,0.3); 
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }
`;
