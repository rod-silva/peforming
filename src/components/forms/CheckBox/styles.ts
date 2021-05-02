import styled from "styled-components";

export const StyledCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

interface FormControlProps {
  isChecked: boolean;
}

export const FormControl = styled.label<FormControlProps>`
  display: flex;
  align-items: center;
  font-weight: 600;
  user-select: none;
  position: relative;
  padding-left: 30px;

  > span {
    cursor: pointer;
    position: absolute;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 3px solid ${(props) => props.theme.colors.palette.gray[400]};
    border-radius: 0.4rem;

    transition: all 0.4s;

    &:hover {
      background-color: ${(props) => props.theme.colors.palette.gray[300]};
    }

    &::after {
      position: absolute;
      display: ${(props) => (props.isChecked ? "block" : "none")};
      content: "";
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid ${(props) => props.theme.colors.palette.blue[500]};
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    &:active {
      border-color: ${(props) => props.theme.colors.palette.blue[500]};
    }
  }
`;
