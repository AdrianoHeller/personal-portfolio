import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,
    html,
    #root{
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
    };

    input,
    select,
    option,
    ul,
    li{
        margin: 0;
        padding: 0;
    }

`;