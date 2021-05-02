import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Container, InnerContainer, CloseButton } from "./styles";

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onRequestClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  function handleClickUser(event: React.MouseEvent): void {
    if (containerRef.current === event.target) {
      onRequestClose();
    }
  }

  const keysPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onRequestClose();
      }
    },
    [onRequestClose, isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keysPress);
    return () => document.removeEventListener("keydown", keysPress);
  }, [keysPress]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClickUser}
        >
          <InnerContainer
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
          >
            {children}
            <CloseButton onClick={onRequestClose}>
              <AiOutlineClose color="#111" fontSize="1.4rem" />
            </CloseButton>
          </InnerContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};
