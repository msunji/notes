import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`

    :root {
        --main-text-color: #D7BE5D;
        --secondary-text-color: #708fd0;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        color: #2a2929;
        line-height: 1.5;
    }

    ul, ol {
        list-style-type: none;
        padding: 0;
    }

    li {
        color: var(--secondary-text-color);
    }

    body {
        border-top: 13px solid var(--main-text-color);
    }
`;

export default GlobalStyle;
