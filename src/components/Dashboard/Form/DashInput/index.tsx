import { Container, StyledInput } from "./styles";

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "date";
}

export const DashInput: React.FC<InputProps> = ({
  label,
  name,
  type,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledInput id="name" name={name} type={type} {...rest} />
    </Container>
  );
};
