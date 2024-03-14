import IProject from "../../interfaces/IProject";
import ProjectCard from "./ProjectCard";
//framer motion
import { motion } from "framer-motion";

const animContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectContent: React.FC<any> = ({ lang, items }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
    >
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
    </motion.div>
  );
};

export default ProjectContent;
