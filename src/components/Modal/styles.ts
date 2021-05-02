import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const InnerContainer = styled(motion.div)`
  position: relative;
`;

export const CloseButton = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;
  right: 12px;
  border-radius: 100%;

  border: 0;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.4);
  }
`;
