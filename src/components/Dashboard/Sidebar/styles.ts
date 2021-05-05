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
    height: 4.2rem;
    width: 4.2rem;
  }
  padding: 0.9rem;
  height: 6rem;

  > span {
    margin-left: 0.5rem;
    font-size: 1.3rem;
    font-weight: 900;
  }
`;

export const InnerContent = styled.ul`
  list-style: none;
`;
