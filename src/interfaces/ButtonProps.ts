import Props from "./Props";

export default interface ButtonProps extends Props {
  text?: string;
  type: "primary" | "secondary" | "warning" | "danger";
  variant?: "dashed" | "text" | "filled" | "outlined";
}
