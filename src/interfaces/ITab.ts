import IProps from "./IProps";

export interface ITab {
  label: string;
  content: JSX.Element | string ;
}

export interface ITabs extends IProps {
  data: ITab[];
}
