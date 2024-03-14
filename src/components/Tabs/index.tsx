import { useState } from "react";
// interfaces
import { ITab, ITabs } from "../../interfaces/ITab";
import Tab from "./Tab";
// Framer Motion
import { motion } from "framer-motion";

const Tabs: React.FC<ITabs> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<ITab>(data[0]);
  return (
    <div className="text-text-main">
      <Tab
        activeTabLabel={activeTab.label}
        tabs={data}
        setActiveTab={setActiveTab}
      />
      <motion.div
        key={activeTab.label}
        className="w-full flex justify-center items-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {activeTab.content}
      </motion.div>
    </div>
  );
};

export default Tabs;
