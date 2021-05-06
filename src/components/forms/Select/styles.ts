import styled from "styled-components";

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.div<ContainerProps>`
  > * {
    transition: all 0.3;
  }
  > div {
    border: 2px solid ${(props) => props.theme.colors.palette.gray[400]};
    width: fit-content;
    padding: 0.4rem 0.6rem;
    border-radius: 0.25rem;
    &::after {
      display: inline-block;
      content: "";
      width: 0.7rem;
      height: 0.7rem;
      background-color: ${(props) => props.theme.colors.palette.gray[400]};
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
    &:focus-within {
      border-color: ${(props) => props.theme.colors.palette.blue[400]};
    }
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: ${(props) => (props.fullWidth ? "100%" : "unset")};
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    outline: none;
  }
`;
