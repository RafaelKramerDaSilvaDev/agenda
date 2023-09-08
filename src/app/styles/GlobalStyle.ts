import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ¨#DCDCDC;
        margin: 0;
        line-height: 1;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f7f7f7;
        border-radius: 0 2px 2px 0;
        
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 0 2px 2px 0;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

`;
