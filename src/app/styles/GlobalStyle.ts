import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ¨#DCDCDC;
        margin: 0;
        line-height: 1;
    }

    ::-webkit-scrollbar {
       width: 0px;
    }

    ::-webkit-scrollbar-track {}

    ::-webkit-scrollbar-thumb {}

    ::-webkit-scrollbar-thumb:hover {}
`;
