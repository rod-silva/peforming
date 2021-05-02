import styled from "styled-components";

interface StyledInputProps {
  rightIcon: boolean;
  leftIcon: boolean;
  notHaveIcon: boolean;
}

export const FormControl = styled.div`
  transition: all 0.3s;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  outline: 0;
  appearance: none;
  border: 0;
  padding: 0
    ${(props) =>
      props.notHaveIcon ? "0.8rem" : props.leftIcon ? "0.8rem" : "0"}
    0
    ${(props) =>
      props.notHaveIcon ? "0.8rem" : props.rightIcon ? "0.8rem" : "0"};
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.palette.gray[400]};
  padding: 0.7rem 0;
  border-radius: 1rem;
  background-color: #fff;

  div {
    width: 2.4rem;
    font-size: 1.4rem;
    color: #2d3748;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &:focus-within {
    border-color: ${(props) => props.theme.colors.palette.blue[500]};
  }
`;
