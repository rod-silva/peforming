import styled from "styled-components";
import { darken } from "polished";

interface StyledButton {
  backgroundColor?: string;
}

export const StyldButton = styled.button<StyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor ?? "#3182CE"};

  border: 0;
  border-radius: 1.5rem;
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
    box-shadow: 0 0 0 4px;
  }
`;
