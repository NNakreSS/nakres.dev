import { useEffect, useState } from "react";
// localizations
import { useTranslation } from "react-i18next";
// projects data
import { projects } from "../../data/projects";
// components
import Tabs from "../../components/Tabs";
import ProjectContent from "./ProjectContent";
import Button from "../../components/Button";
import { Helmet } from "react-helmet";

const getTabsData = (lang: string) =>
  Object.entries(projects).map(([category, items]) => {
    return {
      label: category,
      content: <ProjectContent lang={lang} items={items} />,
    };
  });

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];
  const [tabsData, setTabsData] = useState(getTabsData(lang));

  useEffect(() => {
    setTabsData(getTabsData(lang));
  }, [lang]);

  return (
    <section className="flex flex-col gap-4">
      <Helmet>
        <title>{t("pages.projects")}</title>
        <meta name="description" content={t("descriptions.projects")} />
      </Helmet>
      <div className="flex items-center justify-between">
        <h1 className="text-text-main text-4xl font-semibold">
          {t("pages.projects").toUpperCase()}
        </h1>
        <a target="_blank" href="https://github.com/NNakreSS">
          <Button variant="text" type="primary" className="w-auto p-0">
            GitHub
          </Button>
        </a>
      </div>
      <Tabs data={tabsData} />
    </section>
  );
};

export default Projects;
