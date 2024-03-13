import { useEffect, useState } from "react";
// localizations
import { useTranslation } from "react-i18next";
// framer motion
import { motion } from "framer-motion";
// components
import Tabs from "../../components/Tabs";
// projects data
import { projects } from "../../data/projects";
// components
import ProjectContent from "./ProjectContent";

const getTabsData = (lang: string) =>
  Object.entries(projects).map(([category, items]) => {
    return {
      label: category,
      content: <ProjectContent lang={lang} items={items} />,
    };
  });

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];
  const [tabsData, setTabsData] = useState(getTabsData(lang));

  useEffect(() => {
    setTabsData(getTabsData(lang));
  }, [lang]);

  return (
    <motion.div
      className="flex flex-col gap-4 gap-y-40"
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Tabs data={tabsData} />
    </motion.div>
  );
};

export default Projects;
