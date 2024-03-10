import Props from "./IProps";

export default interface IButton extends Props {
  text?: string;
  type: "primary" | "secondary" | "warning" | "danger";
  variant?: "dashed" | "text" | "filled" | "outlined";
}
