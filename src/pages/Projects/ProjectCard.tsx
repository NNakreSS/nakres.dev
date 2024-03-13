import IProject from "../../interfaces/IProject";
// icons
import { FaGithub, FaYoutube, FaStore } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const typeOfIcon: { [key: string]: JSX.Element } = {
  github: <FaGithub />,
  demo: <TbWorldWww />,
  youtube: <FaYoutube />,
  store: <FaStore />,
};

const ProjectCard: React.FC<{
  project: IProject;
  lang: string;
  description: any;
}> = ({ project, description, lang }) => {
  return (
    <div className="bg-card p-4 rounded-md shadow-inner shadow-black/30 transition hover:scale-[1.02] duration-300 flex flex-col justify-between">
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
        {project.stack.map((stack: any, _key: number) => (
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
};

export default ProjectCard;
