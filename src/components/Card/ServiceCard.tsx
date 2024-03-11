import React, { ReactNode } from "react";
// interfaces
import IServiceCard from "../../interfaces/IServiceCard";

const ServiceCard: React.FC<IServiceCard> = ({
  title,
  description,
  className,
}): ReactNode => {
  return (
    <div className={className}>
      <h4 className="text-center text-3xl">{title}</h4>
      <p className="text-center text-zinc-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
