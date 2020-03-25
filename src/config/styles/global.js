import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }
`;
