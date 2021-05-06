import { motion, AnimatePresence } from "framer-motion";

const CollapseVariants = {
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        height: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
  },
  enter: {
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
      opacity: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
};

interface ColleProps {
  isCollpase: boolean;
}

export const Collapse: React.FC<ColleProps> = ({ isCollpase, children }) => {
  return (
    <AnimatePresence initial={false}>
      {isCollpase && (
        <motion.div
          variants={CollapseVariants}
          style={{
            overflow: "hidden",
          }}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
