import { Container, Logo, Nav, NavLink } from "./styles";

export const HomeHeader: React.FC = () => {
  return (
    <Container>
      <Logo src="logo.svg" />
      <Nav>
        <NavLink>About us</NavLink>
        <NavLink>Sign in</NavLink>
      </Nav>
    </Container>
  );
};
