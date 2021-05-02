import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import { Button } from "../../Button/Index";
import { Checkbox } from "../../forms/CheckBox";
import { Input } from "../../forms/Input";
import { Modal, ModalProps } from "../../Modal";

import {
  Form,
  Container,
  Head,
  Body,
  CheckBoxWrapper,
  ForgotLink,
  SocialLogin,
  SocialGroup,
} from "./styles";

export const SignInModal: React.FC<ModalProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Modal {...props}>
      <Form>
        <Container>
          <Head>
            <img src="/assets/growth.svg" alt="logo" />
          </Head>
          <Body>
            <Input name="Email" label="Email" type="email" />
            <Input name="Password" label="Password" type="password" />
            <CheckBoxWrapper>
              <Checkbox
                isChecked={isChecked}
                onChange={(event) => setIsChecked(event.currentTarget.checked)}
                name="remember"
              >
                Remember
              </Checkbox>
              <ForgotLink href="/forgotuu">Forgot your password ?</ForgotLink>
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
          </Body>
        </Container>
      </Form>
    </Modal>
  );
};
