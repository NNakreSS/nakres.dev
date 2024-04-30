import React, { ReactNode } from "react";
// interfaces
import ITechnologieCard from "../../interfaces/ITechnologieCard";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TechnologieCard: React.FC<ITechnologieCard> = (
  { imgSrc, title, description, className, link },
  props
): ReactNode => {
  return (
    <Link
      to={link}
      target="_blank"
      className={classNames(
        "flex flex-col items-center justify-center bg-card rounded-md",
        className
      )}
      {...props}
    >
      <div className="cardTitle flex items-center justify-center h-1/6">
        <span>{title}</span>
      </div>
      <div className="cardMain flex items-center justify-center h-4/6 group-hover:scale-125 duration-300 filter group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
        <div className="w-16 lg:w-28">
          <LazyLoadImage
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="cardDescription flex items-center justify-center h-1/6">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default TechnologieCard;
