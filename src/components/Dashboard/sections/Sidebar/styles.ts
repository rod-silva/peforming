import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 14rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
    height: 3.5rem;
    width: 3.5rem;
  }
  padding: 0.9rem;
  height: 6rem;

  > span {
    margin-left: 0.5rem;
    font-size: 1.1rem;
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
