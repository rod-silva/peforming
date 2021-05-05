import { AppProps } from "next/app";

import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { theme } from "../styles/theme";

import { Provider as NextAuthProvider } from "next-auth/client";
import { GlobalStyles } from "../styles/GlobalStyles";
import { GlobalContextProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledComponentsProvider theme={theme}>
      <NextAuthProvider session={pageProps.session}>
        <GlobalContextProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </GlobalContextProvider>
      </NextAuthProvider>
    </StyledComponentsProvider>
  );
}

export default MyApp;
