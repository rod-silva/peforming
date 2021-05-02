import styled from "styled-components";

export const FormControl = styled.div`
  transition: all 0.3s;

  input:focus {
    * .focus-border {
      height: 300px;
    }
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  appearance: none;
  border: 0;
`;
export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const InputWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.colors.palette.gray[400]};
  padding: 0.7rem 0.75rem;
  border-radius: 1rem;
  background-color: #fff;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.palette.blue[500]};
  }
`;
