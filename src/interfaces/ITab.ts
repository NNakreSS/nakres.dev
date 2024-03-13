import IProps from "./IProps";

export interface ITab {
  id: string;
  label: string;
}

export interface ITabs extends IProps {
  tabs: ITab[];
}
