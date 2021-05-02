import { motion, AnimatePresence } from "framer-motion";

interface ColleProps {
  isCollpase: boolean;
}

export const Collapse: React.FC<ColleProps> = ({ isCollpase, children }) => {
  return (
    <AnimatePresence>
      {isCollpase && (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
