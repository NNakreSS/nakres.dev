import React, { ReactNode } from "react";
import Props from "../../interfaces/Props";

const Marquee: React.FC<Props> = ({ children, className }): ReactNode => (
  <div className={"overflow-hidden flex  justify-start " + className}>
    <div className="marquee flex flex-shrink-0 items-center justify-around whitespace-nowrap">
      {children}
    </div>
    <div className="marquee flex flex-shrink-0 items-center justify-around whitespace-nowrap">
      {children}
    </div>
  </div>
);
export default Marquee;
