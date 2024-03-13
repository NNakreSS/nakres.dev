import { useState } from "react";
// interfaces
import { ITab, ITabs } from "../../interfaces/ITab";
import Tab from "./Tab";
// framer motion
// import { motion } from "framer-motion";

const Tabs: React.FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  return (
    <div className="text-text-main">
      <Tab activeTab={activeTab.id} tabs={tabs} setActiveTab={setActiveTab} />
      <div className="w-full flex justify-center items-center mt-10">
        {activeTab.label}
      </div>
    </div>
  );
};

export default Tabs;
