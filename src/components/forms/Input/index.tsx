import { FormControl, StyledInput, Label, InputWrapper } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  type?: string;
  onClickRightIcon?: () => void;
  onClickLeftIcon?: () => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  rightIcon,
  leftIcon,
  onClickLeftIcon,
  onClickRightIcon,
  ...rest
}) => {
  return (
    <FormControl>
      {!!label && (
        <Label htmlFor={name} id={name}>
          {label}
        </Label>
      )}
      <InputWrapper>
        {!!leftIcon && (
          <div
            role="button"
            tabIndex={-1}
            onKeyDown={() => onClickLeftIcon()}
            onClick={onClickLeftIcon}
          >
            {leftIcon}
          </div>
        )}
        <StyledInput
          notHaveIcon={!rightIcon && !leftIcon}
          rightIcon={!!rightIcon}
          leftIcon={!!leftIcon}
          id={name}
          name={name}
          type={type}
          {...rest}
        />
        {!!rightIcon && (
          <div
            role="button"
            tabIndex={-1}
            onKeyDown={() => onClickRightIcon()}
            onClick={onClickRightIcon}
          >
            {rightIcon}
          </div>
        )}
      </InputWrapper>
    </FormControl>
  );
};
