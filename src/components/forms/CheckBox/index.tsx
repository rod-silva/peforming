import { FormControl, StyledCheckBox } from "./styles";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  isChecked,
  children,
  ...rest
}) => {
  return (
    <FormControl isChecked={isChecked}>
      <StyledCheckBox
        {...rest}
        checked={isChecked}
        name={name}
        id={name}
        type="checkbox"
      />
      <span></span>
      {children}
    </FormControl>
  );
};
