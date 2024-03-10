import React, { ReactNode } from "react";
import ButtonProps from "../../interfaces/ButtonProps";

import classNames from "classnames";

const Button: React.FC<ButtonProps> = (
  { children, text, className, type, variant },
  props
): ReactNode => {
  const baseClasses =
    "bg-none  border-2 p-2 w-4/12 rounded-md text-2xl  font-medium";

  const variantClasses = {
    filled: classNames({
      "bg-blue-500 !text-white": type == "primary",
      "bg-violet-500 !text-white": type == "secondary",
      "bg-amber-500 !text-white": type == "warning",
      "bg-red-500 !text-white": type == "danger",
    }),
    outlined: classNames({
      "border-blue-500": type == "primary",
      "border-violet-500": type == "secondary",
      "border-amber-500": type == "warning",
      "border-red-500": type == "danger",
    }),
    dashed: "border-dashed",
    text: "border-none",
  };

  const typeClasses = {
    primary: "border-blue-500 text-blue-500",
    secondary: "border-violet-500 text-violet-500",
    warning: "border-amber-500 text-amber-500",
    danger: "border-red-500 text-red-500",
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
