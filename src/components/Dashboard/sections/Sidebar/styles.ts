import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 14rem;
  transition: all 0.3s;
  box-shadow: 0 0 2px 3px ${(props) => props.theme.colors.palette.gray[400]};

  @media (max-width: 780px) {
    margin-left: -14rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
    height: 2.7rem;
    width: 2.7rem;
  }
  padding: 0.9rem;
  height: 6rem;

  > span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
  }
`;

export const InnerContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem;
  font-weight: 600;
  user-select: none;
  li + li {
    margin-top: 0.7rem;
  }

  > * a {
    text-decoration: none;
    color: inherit;
    border-left: 3px solid transparent;
    cursor: pointer;
    padding: 0.5rem 0.6rem;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.palette.blue[500]};
    }
  }
`;
