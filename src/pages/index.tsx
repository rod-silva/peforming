import Head from "next/head";

import { HomeHeader } from "../styles/pages/Home/Header";
import {
  Box,
  TryNowButton,
  GetSartedSection,
} from "../styles/pages/Home/styles";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>RodNews | home</title>
      </Head>

      <HomeHeader />
      <GetSartedSection>
        <img src="/assets/new-mac.png" alt="laptop" />
        <Box>
          <div>
            <p>Monitor your personal expenses,</p>
            <p>And easily know how to decrease them.</p>
          </div>
          <TryNowButton>Get Started</TryNowButton>
        </Box>
      </GetSartedSection>
    </>
  );
}
