import NextHead from "next/head";
import NextLink from "next/link";

import { useState } from "react";

import { RiArrowLeftSLine } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { Button } from "../components/Button";
import { Input } from "../components/forms/Input";

import {
  Form,
  Head,
  Center,
  Container,
  BackButton,
} from "../styles/pages/Login/styles";

import { Body } from "../styles/pages/SignUp";

export default function SignUP(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <NextHead>
        <title>RodNews | Sign up</title>
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
              <img src="/assets/growth.svg" alt="logo" />
            </Head>
            <Body>
              <Input name="Email" label="Email" type="email" />
              <Input
                name="Password"
                label="Password"
                type={showPassword ? "text" : "password"}
                onClickRightIcon={() => setShowPassword(!showPassword)}
                rightIcon={showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              />
              <Button type="submit">Sign up</Button>
            </Body>
          </Container>
        </Form>
      </Center>
    </>
  );
}
