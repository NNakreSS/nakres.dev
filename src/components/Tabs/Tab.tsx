import React from "react";
// interfaves
import IProps from "../../interfaces/IProps";
import { ITab } from "../../interfaces/ITab";
// framer motion
import { motion } from "framer-motion";

interface ITabProps extends IProps {
  activeTabLabel: string;
  setActiveTab: (tab: ITab) => void;
  tabs: ITab[];
}

const Tab: React.FC<ITabProps> = ({ activeTabLabel, setActiveTab, tabs }) => {
  return (
    <div
      id="tab"
      className="text-md p-2 bg-card rounded-md shadow-md shadow-black/50 flex gap-4 w-full md:w-10/12 lg:w-6/12 mx-auto"
    >
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item)}
          className="p-1 relative w-full font-semibold hover:bg-background/20 rounded-md transition duration-200"
        >
          {activeTabLabel == item.label && (
            <motion.div
              transition={{ type: "spring", duration: 0.8 }}
              layoutId="active-pill"
              className="absolute bg-background inset-0 rounded-md"
            />
          )}
          <span className="relative">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tab;
