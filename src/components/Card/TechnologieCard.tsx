import React, { ReactNode } from "react";
// interfaces
import ITechnologieCard from "../../interfaces/ITechnologieCard";
import { Link } from "react-router-dom";

const TechnologieCard: React.FC<ITechnologieCard> = (
  { imgSrc, title, description, className, link },
  props
): ReactNode => {
  return (
    <Link
      to={link}
      target="_blank"
      className={"flex flex-col items-center justify-center" + " " + className}
      {...props}
    >
      <div className="cardTitle flex items-center justify-center h-1/6">
        <span>{title}</span>
      </div>
      <div className="cardMain flex items-center justify-center h-4/6 group-hover:scale-125 duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,1.0)]">
        <img src={imgSrc} alt={title} className="w-16 lg:w-28" />
      </div>
      <div className="cardDescription flex items-center justify-center h-1/6">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default TechnologieCard;
