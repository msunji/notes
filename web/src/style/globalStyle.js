import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        color: #524f4c;
        line-height: 1.5;
    }
`;

export default GlobalStyle;
