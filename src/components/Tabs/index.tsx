import { useState } from "react";
// interfaces
import { ITabs } from "../../interfaces/ITab";
import Tab from "./Tab";
// framer motion
// import { motion } from "framer-motion";

const Tabs: React.FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  return (
    <div className="text-text-main mx-auto">
      <Tab activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Tabs;
