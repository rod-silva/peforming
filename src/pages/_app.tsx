import { AppProps } from "next/app";

import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { theme } from "../styles/theme";

import { GlobalStyles } from "../styles/GlobalStyles";
import { GlobalContextProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledComponentsProvider theme={theme}>
      <GlobalContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </GlobalContextProvider>
    </StyledComponentsProvider>
  );
}

export default MyApp;
