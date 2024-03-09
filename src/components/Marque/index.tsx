import React from "react";
import Props from "../../interfaces/Props";

const Marque: React.FC<Props> = ({ children, className }) => (
  <div className={"overflow-hidden flex gap-10 justify-start " + className}>
    <div className="marque flex flex-shrink-0 gap-10 items-center justify-around">
      {children}
    </div>
    <div className="marque flex flex-shrink-0 gap-10 items-center justify-around">
      {children}
    </div>
  </div>
);
export default Marque;
