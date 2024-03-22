import IProject from "../../interfaces/IProject";
// icons
import { FaGithub, FaYoutube, FaStore } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
// framer motion
import { motion } from "framer-motion";

const typeOfIcon: { [key: string]: JSX.Element } = {
  github: <FaGithub />,
  demo: <TbWorldWww />,
  youtube: <FaYoutube />,
  store: <FaStore />,
};

const animItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ProjectCard: React.FC<{
  project: IProject;
  lang: string;
  description: any;
}> = ({ project, description, lang }) => {
  return (
    <motion.div
      variants={animItem}
      transition={{ duration: 0.5 }}
      className="bg-card p-4 rounded-md shadow-inner shadow-black/30 flex flex-col justify-between"
    >
      {/*  Header  */}
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

      {/*  Main  */}
      <div className="flex flex-col md:flex-row gap-5 py-5 h-full">
        {project?.img && (
          <img
            src={project?.img}
            alt={project.title}
            className="object-cover md:h-52 w-6/12 rounded-md"
          />
        )}

        <p className="w-6/12 text-start text-xl  text-text-main/80">
          {description[lang]}
        </p>
      </div>

      {/*  Footer  */}
      <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-2 border-t-[1px] border-text-main/50 border-solid mt-2 pt-4">
        {project.stack.map((stack: any, _key: number) => (
          <span
            key={_key}
            className="text-xs font-mono font-thin px-1 border-warning/70 text-warning border-[1px] rounded-full min-w-20 flex items-center justify-center"
          >
            {stack}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
