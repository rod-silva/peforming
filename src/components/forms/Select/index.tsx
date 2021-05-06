import { Container } from "./styles";

interface SelectProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  children,
  ...rest
}) => {
  return (
    <Container>
      <label id={name} htmlFor={name}>
        {label}
      </label>
      <div>
        <select {...rest} id={name}>
          {children}
        </select>
      </div>
    </Container>
  );
};
