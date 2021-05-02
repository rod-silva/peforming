import styled from "styled-components";
import { darken } from "polished";

export const Form = styled.form`
  width: 100vw;
  max-width: 470px;
  padding: 2rem;
`;

export const Container = styled.div`
  border: 0;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Head = styled.div`
  display: flex;
  padding: 0.8rem;
  > img {
    margin: 0 auto;
    height: 4rem;
    width: 4rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  div + div {
    margin-top: 0.7rem;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const ForgotLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.palette.blue[600]};
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;

export const SocialLogin = styled.div`
  text-align: center;
  padding: 1rem 0;
  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const SocialGroup = styled.div`
  padding: 0.5rem 0;

  button + button {
    margin-left: 1.4rem;

    svg {
      color: ${(props) => props.theme.colors.palette.blue[600]};
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.palette.gray[300]};
    svg {
      font-size: 2rem;
    }
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem 0.35rem;
    border: 0;
    border-radius: 0.4rem;
    &:hover {
      background-color: ${(props) =>
        darken(0.1, props.theme.colors.palette.gray[300])};
    }
    :focus {
      box-shadow: 0 0 0 0.35rem;
    }
  }
`;
