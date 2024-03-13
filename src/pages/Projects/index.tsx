// framer motion
import { motion } from "framer-motion";
// components
import Tabs from "../../components/Tabs";
import { ITab } from "../../interfaces/ITab";

const tabs: ITab[] = [
  {
    id: "tab1",
    label: "Fivem",
  },
  {
    id: "tab2",
    label: "Web",
  },
  {
    id: "tab3",
    label: "Mobile",
  },
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
