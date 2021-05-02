import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Collapse } from "../../../components/Collapse";
import { useGlobalContext } from "../../../context/globalContext";

import {
  Container,
  Logo,
  Nav,
  NavLink,
  ToggleButton,
  InnerContainer,
  NavCollpase,
} from "./styles";

export const HomeHeader: React.FC = () => {
  const [isCollapse, seIsCollapse] = useState(false);
  const { handleSignInModal } = useGlobalContext();
  return (
    <Container>
      <InnerContainer>
        <Logo src="logo.svg" />
        <ToggleButton onClick={() => seIsCollapse(!isCollapse)}>
          <RiMenuFill fontSize="1.8rem" />
        </ToggleButton>
        <Nav>
          <NavLink>About us</NavLink>
          <NavLink onClick={handleSignInModal}>Sign in</NavLink>
        </Nav>
      </InnerContainer>
      <Collapse isCollpase={isCollapse}>
        <NavCollpase>
          <NavLink>About us</NavLink>
          <NavLink>Sign in</NavLink>
        </NavCollpase>
      </Collapse>
    </Container>
  );
};
