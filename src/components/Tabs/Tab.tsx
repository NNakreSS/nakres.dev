import React from "react";
// interfaves
import IProps from "../../interfaces/IProps";
import { ITab } from "../../interfaces/ITab";
// framer motion
import { motion } from "framer-motion";

interface ITabProps extends IProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: ITab[];
}

const Tab: React.FC<ITabProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div
      id="tab"
      className="text-md relative p-2 px-5 bg-card rounded-md shadow-md shadow-black/50 flex flex-row gap-4"
    >
      {tabs.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item.id)}
          className="p-1 px-2 relative min-w-20"
        >
          {activeTab == item.id && (
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
