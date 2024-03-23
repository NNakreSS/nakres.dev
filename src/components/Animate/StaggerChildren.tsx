import { motion } from "framer-motion";

const animContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const StaggerChildren: React.FC<any> = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerChildren;
