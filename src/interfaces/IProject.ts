interface ProjectLink {
  type: string;
  link: string;
}

interface ProjectDescription {
  tr: string;
  en: string;
}

export default interface IProject {
  title: string;
  description: ProjectDescription;
  stack: string[];
  links?: ProjectLink[];
  img?: string;
}
