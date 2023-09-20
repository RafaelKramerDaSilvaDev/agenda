import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ¨#DCDCDC;
        margin: 0;
        line-height: 1;
    }

/* Estilização para dispositivos com tela maior que 768px */
@media (min-width: 769px) {
    /* Estilização para a scrollbar em geral */
    ::-webkit-scrollbar {
        width: 10px;  /* Largura da scrollbar vertical */
        height: 10px; /* Altura da scrollbar horizontal */
    }

    /* Track (trilho) da scrollbar */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; /* Cor de fundo do trilho */
    }

    /* Handle (pegador) da scrollbar */
    ::-webkit-scrollbar-thumb {
        background: #888; /* Cor de fundo do pegador */
    }

    /* Handle (pegador) da scrollbar ao passar o mouse */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; /* Cor de fundo do pegador ao passar o mouse */
    }
}
`;
