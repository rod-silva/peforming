import NextHead from "next/head";

import {
  Container,
  Main,
  Navbar,
  Content,
  Sidebar,
  MobileSidebar,
} from "../..";
import { useGlobalContext } from "../../../../context/globalContext";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  const { isSideBarOpen } = useGlobalContext();

  return (
    <>
      <NextHead>
        <title> {`Dashboard | ${title}`}</title>
      </NextHead>
      <Container>
        {isSideBarOpen && <MobileSidebar />}
        <Sidebar />
        <Main>
          <Navbar />
          <Content>{children}</Content>
        </Main>
      </Container>
    </>
  );
};
