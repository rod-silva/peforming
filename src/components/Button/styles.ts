import styled from "styled-components";
import { darken } from "polished";

interface StyledButton {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  onActiveBoxShadow?: string;
}

export const StyldButton = styled.button<StyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color ?? "inherit"};
  background-color: ${(props) => props.backgroundColor ?? "#3182CE"};

  border: 0;
  border-radius: ${(props) => props.borderRadius ?? "1.5rem"};
  padding: 0.7rem 1rem;

  font-weight: 600;
  font-size: 1.2rem;

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      darken(
        0.1,
        props.backgroundColor ?? props.theme.colors.palette.blue[500]
      )};
  }

  &:active {
    box-shadow: ${(props) => props.onActiveBoxShadow ?? "0 0 0 4px"};
  }
`;
