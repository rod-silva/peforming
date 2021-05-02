import { darken } from "polished";
import styled from "styled-components";

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  height: 2.1875rem;
  width: 2.1875rem;
  font-size: 1.7rem;
  border-radius: 0.7rem;
  margin-right: auto;

  background-color: ${(props) => props.theme.colors.palette.blue[500]};

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.palette.blue[500])};
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  padding: 0.5rem 0;
`;
