import styled from "styled-components";
import { darken } from "polished";

export const NewExpensesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  border-radius: 0.4rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.palette.blue[400]};

  padding: 0.7rem 0.6rem;
  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.palette.blue[400])};
  }
`;

export const FormExpense = styled.form``;

export const FirstSection = styled.div``;
