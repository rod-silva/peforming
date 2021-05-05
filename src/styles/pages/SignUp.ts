import styled from "styled-components";
import { Body as LoginBody } from "./Login/styles";

export const Body = styled(LoginBody)`
  > button {
    margin-top: 1rem;
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > div {
    flex-basis: 100%;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 620px) {
    > div {
      flex-basis: 48.9%;
      margin-bottom: 0;
    }
    > div + div {
      margin-left: 0.6rem;
    }
  }
`;
