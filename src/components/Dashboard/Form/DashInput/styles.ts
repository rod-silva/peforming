import styled from "styled-components";

export const Container = styled.div`
  label {
    display: block;
    color: ${(props) => props.theme.colors.palette.gray[600]};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.palette.gray[400]};
  padding: 0.4rem 0.6rem;
  border-radius: 0.25rem;
  outline: 0;
  width: 100%;
  background-color: transparent;
  transition: all 0.3s;
  &:focus {
    border-color: ${(props) => props.theme.colors.palette.blue[400]};
  }
`;
