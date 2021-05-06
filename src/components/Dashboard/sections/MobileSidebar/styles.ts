import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SideBar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 14rem;
  height: 100%;
`;
