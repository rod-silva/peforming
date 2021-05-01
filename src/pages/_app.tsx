import { AppProps } from "next/app";

import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { theme } from "../styles/theme";

import { GlobalStyles } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledComponentsProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </StyledComponentsProvider>
  );
}

export default MyApp;
