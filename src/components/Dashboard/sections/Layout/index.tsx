import NextHead from "next/head";

import { Container, Main, Navbar, Content, Sidebar } from "../..";

interface LayoutProps {
  children: React.ReactElement[];
  title: string;
}

export const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <NextHead>
        <title> {`Dashboard | ${title}`}</title>
      </NextHead>
      <Container>
        <Sidebar />
        <Main>
          <Navbar />
          <Content>{children}</Content>
        </Main>
      </Container>
    </>
  );
};
