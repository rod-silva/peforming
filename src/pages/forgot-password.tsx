import NextHead from "next/head";
import NextLink from "next/link";

import { RiArrowLeftSLine } from "react-icons/ri";

import { Input } from "../components/forms/Input";

import {
  Form,
  Head,
  Body,
  Center,
  Container,
} from "../styles/pages/Login/styles";

import { BackButton, Text } from "../styles/pages/forgotPassword";

export default function SignIn(): JSX.Element {
  return (
    <>
      <NextHead>
        <title>RodNews | Forgot Password</title>
      </NextHead>
      <Center>
        <Form initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Container>
            <Head>
              <NextLink href="/">
                <BackButton>
                  <RiArrowLeftSLine />
                </BackButton>
              </NextLink>
            </Head>
            <Text>Please enter your email to retrieve your password.</Text>
            <Body>
              <Input name="Email" type="email" />
            </Body>
          </Container>
        </Form>
      </Center>
    </>
  );
}
