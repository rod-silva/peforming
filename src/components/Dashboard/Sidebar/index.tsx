import { Container, Header, InnerContent } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src="/assets/growth.svg" alt="logo" />
        <span>Performing</span>
      </Header>
      <InnerContent></InnerContent>
    </Container>
  );
};
