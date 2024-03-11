import React, { ReactNode } from "react";
import IButton from "../../interfaces/IButton";

import classNames from "classnames";

const Button: React.FC<IButton> = (
  { children, text, className, type, variant },
  props
): ReactNode => {
  const baseClasses =
    "bg-none  border-2 p-2 w-4/12 rounded-md text-2xl  font-medium";

  const variantClasses = {
    filled: classNames({
      "bg-primary !text-text-main": type == "primary",
      "bg-secondary !text-text-main": type == "secondary",
      "bg-warning !text-text-main": type == "warning",
      "bg-danger !text-text-main": type == "danger",
    }),
    outlined: classNames({
      "border-primary": type == "primary",
      "border-secondary": type == "secondary",
      "border-warning": type == "warning",
      "border-danger": type == "danger",
    }),
    dashed: "border-dashed",
    text: "border-none",
  };

  const typeClasses = {
    primary: "border-primary text-primary",
    secondary: "border-secondary text-secondary",
    warning: "border-warning text-warning",
    danger: "border-danger text-danger",
  };

  const classes = classNames(
    baseClasses,
    className,
    variantClasses[variant!],
    typeClasses[type]
  );
  return (
    <button {...props} className={classes}>
      {children ?? text}
    </button>
  );
};

export default Button;
