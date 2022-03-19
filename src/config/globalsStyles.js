import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --very-light-pink: #C7C7C7;
        --text-input-field: #F7F7F7;
        --hospital-green: #ACD9B2;
        --sm: 14px;
        --md: 16px;
        --lg: 18px;
    }
    body {
        margin: 0;
        font-family: 'Quicksand', sans-serif;
    }
`