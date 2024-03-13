import { useState } from "react";
// interfaces
import { ITab, ITabs } from "../../interfaces/ITab";
import Tab from "./Tab";

const Tabs: React.FC<ITabs> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<ITab>(data[0]);
  return (
    <div className="text-text-main">
      <Tab
        activeTabLabel={activeTab.label}
        tabs={data}
        setActiveTab={setActiveTab}
      />
      <div className="w-full flex justify-center items-center mt-10">
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
