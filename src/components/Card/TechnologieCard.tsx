import React, { ReactNode } from "react";
// interfaces
import ICard from "../../interfaces/ICard";
import { Link, Route } from "react-router-dom";

const TechnologieCard: React.FC<ICard> = (
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
      <div className="cardMain flex items-center justify-center h-4/6">
        <img src={imgSrc} alt={title} className="w-16 lg:w-28" />
      </div>
      <div className="cardDescription flex items-center justify-center h-1/6">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default TechnologieCard;
