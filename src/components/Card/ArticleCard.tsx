import React, { ReactNode } from "react";
// interfaces
import classNames from "classnames";
import Article from "../../interfaces/IArticle";
//icons
import { FaExternalLinkAlt } from "react-icons/fa";

const ArticleCard: React.FC<any> = ({ article, className }): ReactNode => {
  const Article = article as Article;
  return (
    <div className={classNames(className, "bg-card rounded-md text-text-main")}>
      <div className="flex justify-between">
        <span className="text-sm text-text-main/60">{Article.pubDate}</span>
        <a
          href={Article.link}
          target="_blank"
          className="text-2xl text-text-main/50 hover:text-text-main hover:scale-110 transition duration-300 cursor-pointer"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div>
        <h4 className="text-center text-2xl lg:text-3xl">{Article.title}</h4>
        <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-2 border-t-[1px] border-text-main/50 border-solid mt-5 pt-4 ">
          {Article.categories.map((stack, key) => (
            <span
              key={key}
              className="text-xs font-mono font-thin px-1 border-warning/70 text-warning border-[1px] rounded-full min-w-20 flex items-center justify-center text-nowrap"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
