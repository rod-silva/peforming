import { FormControl, StyledInput, Label, InputWrapper } from "./styles";
import { IconType } from "react-icons";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <FormControl>
      {!!label && (
        <Label htmlFor={name} id={name}>
          {label}
        </Label>
      )}
      <InputWrapper>
        <StyledInput id={name} name={name} type={type} {...rest} />
      </InputWrapper>
    </FormControl>
  );
};
