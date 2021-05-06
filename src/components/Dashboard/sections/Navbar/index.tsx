import { RiMenuLine } from "react-icons/ri";
import { useGlobalContext } from "../../../../context/globalContext";
import { Container, Toggle } from "./styles";

export const Navbar: React.FC = () => {
  const { handleSideBarOpen } = useGlobalContext();

  return (
    <Container>
      <Toggle onClick={handleSideBarOpen}>
        <RiMenuLine />
      </Toggle>
    </Container>
  );
};
