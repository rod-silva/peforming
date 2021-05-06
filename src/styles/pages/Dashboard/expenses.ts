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

  transition: all 0.3s;

  padding: 0.7rem 0.6rem;
  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.palette.blue[400])};
  }
  &:active {
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.palette.gray[400]};
  }
`;

export const FormExpense = styled.form`
  margin-top: 1.2rem;

  color: ${(props) => props.theme.colors.palette.gray[600]};
`;

export const FormWraper = styled.div`
  display: flex;
  > div:first-child {
    flex: 1;
  }

  .comentary {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    textarea {
      align-self: flex-start;
      resize: none;
      border: 2px solid ${(props) => props.theme.colors.palette.gray[400]};
      border-radius: 0.35rem;
      height: 10rem;
      width: 20rem;
      outline: none;
      font-family: inherit;
      background-color: transparent;
      padding: 0.8rem;
      &:focus {
        border-color: ${(props) => props.theme.colors.palette.blue[400]};
      }
    }
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    margin-bottom: 0.5rem;
    > div {
      flex: 1;
    }

    div + div {
      margin-left: 0.5rem;
    }
  }
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    margin-bottom: 0.5rem;
    div:first-child {
      align-self: flex-start;
    }

    div + div {
      margin-left: 0.5rem;
    }
  }

  div + div {
    div + div {
      input {
        width: 90px;
      }
    }
  }
`;

export const Receipt = styled.div`
  padding: 1.2rem;
  > div {
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors.palette.gray[400]};
    font-weight: 600;
    height: 12rem;

    > span {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      border: 0;
      outline: 0;
      padding: 0.4rem 0.7rem;
      border-top: 1px solid ${(props) => props.theme.colors.palette.gray[400]};
    }
    margin-bottom: 1rem;
  }
  button {
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    padding: 0.35rem 0.7rem;
    background-color: ${(props) => props.theme.colors.palette.gray[400]};
    border-radius: 0.25rem;

    transition: all 0.3s;

    &:hover {
      background-color: ${(props) =>
        darken(0.1, props.theme.colors.palette.gray[400])};
    }
    &:active {
      box-shadow: 0 0 0 4px ${(props) => props.theme.colors.palette.blue[400]};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  > button {
    margin-left: auto;
    &:active {
      box-shadow: 0 0 0 4px ${(props) => props.theme.colors.palette.gray[400]};
    }
  }
`;

export const Divider = styled.div`
  margin: 10px 0;
  border: 1px solid ${(props) => props.theme.colors.palette.gray[400]};
`;
