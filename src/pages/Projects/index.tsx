import { useEffect, useState } from "react";
// localizations
import { useTranslation } from "react-i18next";
// framer motion
import { motion } from "framer-motion";
// components
import Tabs from "../../components/Tabs";
// projects data
import { projects } from "../../data/projects";
// icons
import { FaGithub, FaYoutube, FaStore } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import IProject from "../../interfaces/IProject";

const typeOfIcon: { [key: string]: JSX.Element } = {
  github: <FaGithub />,
  demo: <TbWorldWww />,
  youtube: <FaYoutube />,
  store: <FaStore />,
};

const getTabsData = (lang: string) =>
  Object.entries(projects).map(([category, items], ikey) => {
    return {
      label: category,
      content: (
        <div
          key={ikey}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
        >
          {items.map((item, tkey) => {
            const description: { [key: string]: string } = item.description;
            const project: IProject = item;
            return (
              <div
                key={tkey}
                className="bg-card p-4 rounded-md shadow-inner shadow-black/30 transition hover:scale-[1.02] duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <div className="flex gap-2 text-2xl">
                    {project.links!.map(({ link, type }, akey) => (
                      <a key={akey} target="_blank" href={link}>
                        {typeOfIcon[type]}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center py-5">
                  {project?.img && (
                    <div className="w-9/12 rounded-md overflow-hidden shadow-md">
                      <img src={project?.img} alt={project.title} />
                    </div>
                  )}
                  <p className="w-full text-center text-xl text-text-second">
                    {description[lang]}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-5 border-t-[1px] border-text-main/50 border-solid mt-2 pt-4">
                  {item.stack.map((stack, _key) => (
                    <span
                      key={_key}
                      className="text-xs p-1 border-warning/50 text-warning border-2 rounded-full min-w-20 flex items-center justify-center"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ),
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
