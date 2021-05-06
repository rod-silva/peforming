import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  .round {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .balance {
    background-color: ${(props) => props.theme.colors.palette.blue[400]};
  }

  .incomes {
    background-color: ${(props) => props.theme.colors.palette.green[300]};
  }

  .expenses {
    background-color: ${(props) => props.theme.colors.palette.red[300]};
  }

  .monthly-balance {
    background-color: ${(props) => props.theme.colors.palette.purple[300]};
  }
`;

export const Card = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.3rem;
  padding: 0.9rem;

  background-color: #ffff;
  color: ${(props) => props.theme.colors.palette.gray[600]};

  > * svg {
    font-size: 2rem;
  }

  > div p {
    margin-bottom: 0.5rem;
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
