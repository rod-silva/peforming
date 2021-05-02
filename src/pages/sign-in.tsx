import NextHead from "next/head";
import NextLink from "next/link";

import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { Button } from "../components/Button";
import { Checkbox } from "../components/forms/CheckBox";
import { Input } from "../components/forms/Input";

import {
  Form,
  Head,
  Body,
  Center,
  Question,
  Container,
  BackButton,
  SocialLogin,
  SocialGroup,
  CheckBoxWrapper,
} from "../styles/pages/Login/styles";

export default function SignIn(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <NextHead>
        <title>RodNews | Login</title>
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
              <CheckBoxWrapper>
                <Checkbox
                  isChecked={isChecked}
                  onChange={(event) =>
                    setIsChecked(event.currentTarget.checked)
                  }
                  name="remember"
                >
                  Remember
                </Checkbox>
                <NextLink href="/forgotuu">
                  <Question>Forgot your password ?</Question>
                </NextLink>
              </CheckBoxWrapper>
              <Button type="submit">Submit</Button>
              <SocialLogin>
                <p>Or try with social medias</p>
                <SocialGroup>
                  <button type="button">
                    <FcGoogle />
                  </button>
                  <button type="button">
                    <AiFillFacebook />
                  </button>
                </SocialGroup>
              </SocialLogin>
              <NextLink href="/sign-up">
                <Question>Do not have an account yet ?</Question>
              </NextLink>
            </Body>
          </Container>
        </Form>
      </Center>
    </>
  );
}
