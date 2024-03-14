// components
import { motion } from "framer-motion";

const Articles = () => (
  <motion.div
    className="flex flex-col gap-4 gap-y-40 min-h-[55vh]"
    initial={{ opacity: 0, translateY: 100 }}
    animate={{ opacity: 1, translateY: 0 }}
  >
    <h2 className="m-auto text-5xl text-text-main/60 p-20">Development...</h2>
  </motion.div>
);

export default Articles;
