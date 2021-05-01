import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     * {
        box-sizing: border-box;
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, b, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
    }

   
    button,
    input,
    select,
    textarea {
        font-size: 100%; /* 1 */
        margin: 0; /* 2 */
        vertical-align: baseline; /* 3 */
        *vertical-align: middle; /* 3 */
    }

    /* HTML5 display-role reset for older browsers */   
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }

    ol, ul {
	    list-style: none;
    }

    html {
        font-size: 100%; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        -ms-text-size-adjust: 100%; /* 2 */

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media(max-width : 620px) {
            font-size : 75%;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        cursor: pointer;
        color:inherit;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        background-color : ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }
`;
