import Link from "next/link";

import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

import { Collapse } from "../Collapse";

import {
  Logo,
  Nav,
  NavLink,
  Container,
  NavCollpase,
  ToggleButton,
  InnerContainer,
} from "./styles";

export const HomeHeader: React.FC = () => {
  const [isCollapse, seIsCollapse] = useState(false);

  return (
    <Container>
      <InnerContainer>
        <Logo src="logo.svg" />
        <ToggleButton onClick={() => seIsCollapse(!isCollapse)}>
          <RiMenuFill fontSize="1.8rem" />
        </ToggleButton>
        <Nav>
          <NavLink>About us</NavLink>
          <Link href="/sign-in">
            <NavLink>Sign in</NavLink>
          </Link>
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
