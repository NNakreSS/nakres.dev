import { useEffect, useState } from "react";
// localizations
import { useTranslation } from "react-i18next";
// projects data
import { projects } from "../../data/projects";
// components
import Tabs from "../../components/Tabs";
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
    <div className="flex flex-col gap-4 gap-y-40">
      <Tabs data={tabsData} />
    </div>
  );
};

export default Projects;
