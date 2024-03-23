import Props from "./IProps";

export default interface IServiceCard extends Props {
  title?: string;
  description?: string;
  Image?: React.FC<{ className?: string }>;
}
