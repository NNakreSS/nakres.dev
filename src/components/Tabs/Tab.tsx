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
      className="text-md relative p-2 px-5 bg-card rounded-md shadow-md shadow-black/50 flex justify-center flex-row gap-4 w-full md:w-10/12 lg:w-6/12 mx-auto"
    >
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item)}
          className="p-1 px-2 relative w-full"
        >
          {activeTabLabel == item.label && (
            <motion.div
              transition={{ type: "spring", duration: 1 }}
              layoutId="active-pill"
              className="bg-background absolute inset-0 rounded-md"
            />
          )}
          <span className="relative font-semibold hover:text-text-main/50 transition duration-200">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tab;
