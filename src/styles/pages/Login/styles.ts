import styled from "styled-components";
import { motion } from "framer-motion";
import { darken } from "polished";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  width: 100%;
  height: 100vh;
  overflow: auto;

  background-color: ${(props) => props.theme.colors.palette.blue[400]};
`;

export const Form = styled(motion.form)`
  display: block;
  width: 100%;
  max-width: 470px;
  margin: auto 2.2rem;

  transition: all 0.2s;
`;

export const Container = styled.div`
  border: 0;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.8rem;
  > img {
    height: 4rem;
    width: 4rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  > div + div {
    margin-top: 0.7rem;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;

  @media (max-width: 620px) {
    justify-content: center;
    text-align: center;
    a {
      margin-top: 0.7rem;
    }
    > * {
      flex-basis: 100%;
    }
  }
`;

export const Question = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.palette.blue[600]};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  font-size: 1.1rem;
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
    background-color: #fff;
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
      background: ${(props) => props.theme.colors.palette.gray[300]};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem
        ${(props) => props.theme.colors.palette.blue[400]};
    }
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 17px;
  border: 0;
  height: 2.1875rem;
  width: 2.1875rem;
  font-size: 1.7rem;
  border-radius: 0.7rem;

  background-color: ${(props) => props.theme.colors.palette.blue[500]};

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.palette.blue[500])};
  }
`;
