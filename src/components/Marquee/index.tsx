import React, { ReactNode } from "react";
import IProps from "../../interfaces/IProps";
import classNames from "classnames";

const Marquee: React.FC<IProps> = ({ children, className }): ReactNode => (
  <div
    className={classNames(
      "overflow-hidden  flex justify-start horizontal-mask",
      className
    )}
  >
    <div className="marquee flex flex-shrink-0 items-center justify-around whitespace-nowrap">
      {children}
    </div>
    <div className="marquee flex flex-shrink-0 items-center justify-around whitespace-nowrap">
      {children}
    </div>
  </div>
);
export default Marquee;
