import React, { ReactNode } from "react";
// interfaces
import IServiceCard from "../../interfaces/IServiceCard";
import classNames from "classnames";

const ServiceCard: React.FC<IServiceCard> = ({
  title,
  description,
  className,
}): ReactNode => {
  return (
    <div className={classNames(className, "bg-card rounded-md")}>
      <h4 className="text-center text-2xl lg:text-3xl">{title}</h4>
      <p className="text-center text-text-main/90 text-md">{description}</p>
    </div>
  );
};

export default ServiceCard;
