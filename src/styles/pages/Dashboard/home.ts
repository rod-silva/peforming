import styled from "styled-components";

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.palette.gray[600]};
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  font-weight: 600;
  color: ${(props) => props.theme.colors.palette.gray[600]};

  margin-top: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    > img {
      flex: 1;
      margin-bottom: 0.4rem;
    }
    > p {
      text-align: center;
    }
  }
`;
