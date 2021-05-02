import { darken } from "polished";

import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.3);
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  min-height: 5.625rem;
`;

export const Logo = styled.img`
  object-fit: scale-down;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  list-style-type: none;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const NavLink = styled.span`
  position: relative;
  &:first-child {
    margin-right: 0.7rem;
  }
  font-size: 1.2rem;
  font-weight: 600;

  cursor: pointer;
  padding: 0.6rem 1rem;
  border: 0;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.palette.blue[500]};

  transition: background-color 0.2s;

  :hover {
    background-color: ${darken(0.1, "#3182CE")};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: center;
  padding: 2rem;

  @media (max-width: 620px) {
    align-self: flex-start;
  }
`;

export const TryNowButton = styled.a`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.7rem 1.2rem;
  background-color: ${(props) => props.theme.colors.palette.green[400]};
  border: 0;
  border-radius: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  user-select: none;

  transition: all 0.2s;

  &:hover {
    background-color: ${darken(0.1, "#48BB78")};
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadow.button};
  }
`;

export const GetSartedSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.palette.blue[400]};
  padding: 3rem 2rem;
  justify-content: center;
  flex-wrap: wrap;
  img {
    margin: auto auto;
    object-fit: contain;
    width: 100%;
  }

  > * {
    flex-basis: 50%;
  }

  @media (max-width: 970px) {
    grid-template-columns: 1fr;
    grid-auto-flow: 3fr 1fr;

    img {
      width: 65%;
    }
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  background: ${(pros) => pros.theme.colors.palette.blue[500]};

  padding: 0.6rem 1.2rem;
  border: 0;
  border-radius: 1.5rem;

  @media (min-width: 620px) {
    display: none;
  }

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.1, "#3182CE")};
  }

  &:active {
    box-shadow: ${(props) => props.theme.shadow.button};
  }
`;

export const NavCollpase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  > span {
    margin-right: 0 !important;
    background: transparent;

    & + span {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 620px) {
    display: none;
  }
`;

export const TestDiv = styled.div`
  height: 400px;
  width: 400px;
  background-color: red;
`;
