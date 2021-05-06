import { useRef } from "react";
import { Container, SideBar } from "./styles";

import { SidebarLayout } from "../Sidebar/SibarLayout";
import { useGlobalContext } from "../../../../context/globalContext";

export const MobileSidebar: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { handleSideBarOpen } = useGlobalContext();

  function handleClick(event: React.MouseEvent): void {
    if (contentRef.current === event.target) {
      handleSideBarOpen();
    }
  }

  return (
    <Container ref={contentRef} onClick={handleClick}>
      <SideBar>
        <SidebarLayout />
      </SideBar>
    </Container>
  );
};
