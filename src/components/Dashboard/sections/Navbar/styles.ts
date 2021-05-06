import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  background-color: ${(props) => props.theme.colors.palette.blue[400]};
  height: 5.5rem;
  box-shadow: 5px 0 3px 3px ${(props) => props.theme.colors.palette.gray[400]};
`;

export const Toggle = styled.button`
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s;
  background-color: ${(props) => props.theme.colors.palette.green[300]};

  @media (min-width: 780px) {
    display: none;
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.palette.gray[600]};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.palette.green[300])};
  }

  &:active {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.palette.gray[500]};
  }
`;
