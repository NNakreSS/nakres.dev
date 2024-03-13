// framer motion
import { motion } from "framer-motion";
// components
import Tabs from "../../components/Tabs";

const tabs = [
  { id: "Fivem", label: "Fivem" },
  { id: "Mobile", label: "Mobile" },
  { id: "Web", label: "Web" },
];

const Projects = () => (
  <motion.div
    className="flex flex-col gap-4 gap-y-40"
    initial={{ opacity: 0, translateY: 30 }}
    animate={{ opacity: 1, translateY: 0 }}
  >
    <Tabs tabs={tabs} />
  </motion.div>
);

export default Projects;
