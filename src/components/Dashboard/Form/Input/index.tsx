import { Container, StyledInput } from "./styles";

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: "text" | "email" | "password";
}

export const Input: React.FC<InputProps> = ({ label, name, type }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledInput id="name" name={name} type={type} />
    </Container>
  );
};
