import { darken } from "polished";

import styled from "styled-components";

export const TryNowButton = styled.a`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.7rem 1.2rem;
  background-color: ${(props) => props.theme.colors.palette.green[400]};
  border: 0;
  border-radius: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  user-select: none;

  transition: all 0.2s;

  &:hover {
    background-color: ${darken(0.1, "#48BB78")};
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadow.button};
  }
`;

export const GetSartedSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.palette.blue[400]};
  padding: 3rem 2rem;
  justify-content: center;
  flex-wrap: wrap;
  img {
    margin: auto auto;
    object-fit: contain;
    width: 100%;
  }

  > * {
    flex-basis: 50%;
  }

  @media (max-width: 970px) {
    grid-template-columns: 1fr;
    grid-auto-flow: 3fr 1fr;

    img {
      width: 65%;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: center;
  padding: 2rem;

  @media (max-width: 620px) {
    align-self: flex-start;
  }
`;
