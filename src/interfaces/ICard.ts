import Props from "./IProps";

export default interface ICard extends Props {
  imgSrc: string;
  title?: string;
  description?: string;
}
