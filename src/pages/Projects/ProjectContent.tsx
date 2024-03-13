import IProject from "../../interfaces/IProject";
import ProjectCard from "./ProjectCard";

const ProjectContent: React.FC<any> = ({ lang, items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
      {items.map((item: any, tkey: number) => {
        const project: IProject = item;
        const description = project.description;
        return (
          <ProjectCard
            project={project}
            key={tkey}
            lang={lang}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ProjectContent;
