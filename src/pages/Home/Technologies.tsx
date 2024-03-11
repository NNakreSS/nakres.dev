import { useState } from "react";
// components
import Marquee from "../../components/Marquee";
import { TechnologieCard } from "../../components/Card";
// icons
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Slide from "../../components/Slide";

const myTechnologies = {
  html: "https://www.w3schools.com/html",
  css: "https://www.w3schools.com/css",
  javascript: "https://www.w3schools.com/js",
  typescript: "https://www.typescriptlang.org/",
  react: "https://react.dev/",
  tailwind: "https://tailwindcss.com/",
  nodejs: "https://nodejs.org/en",
  lua: "https://www.lua.org/",
  php: "https://www.php.net/",
  "c-sharp": "https://www.w3schools.com/cs/index.php",
  dart: "https://dart.dev/",
  flutter: "https://flutter.dev/",
};

const Technologies = () => {
  const [isCardView, setIsCardView] = useState<boolean>(false);
  const toggleCardPreview = () => setIsCardView((prev) => !prev);

  const cardView = (
    <article
      id="techCards"
      className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5"
    >
      {Object.entries(myTechnologies).map(([tech, link], index) => (
        <div className="group">
          <TechnologieCard
            className="w-full p-5 gap-5 text-xl lg:text-2xl bg-zinc-800 shadow-inner shadow-black rounded-md duration-300"
            key={index}
            imgSrc={`icons/techlonogies/${tech}.svg`}
            title={tech.toUpperCase()}
            link={link}
          />
        </div>
      ))}
    </article>
  );
  const marqueeView = (
    <article id="techMarquee">
      <Marquee className="w-full border-y-2 border-zinc-800 py-5 box-content select-none">
        {Object.entries(myTechnologies).map(([tech, _], index) => {
          return (
            <img
              key={index}
              className="w-14 lg:w-28 mx-5 lg:mx-10"
              src={`icons/techlonogies/${tech}.svg`}
            />
          );
        })}
      </Marquee>
    </article>
  );
  return (
    <section id="technologies">
      <div className="flex items-center justify-start gap-5 mb-5">
        <h3 className="text-2xl lg:text-4xl font-semibold">Teknolojiler</h3>
        {isCardView ? (
          <FaCaretUp
            onClick={toggleCardPreview}
            className="text-6xl cursor-pointer animate-pulse"
          />
        ) : (
          <FaCaretDown
            onClick={toggleCardPreview}
            className="text-6xl cursor-pointer animate-pulse"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 w-full">
        <Slide isOpen={isCardView}>{cardView}</Slide>
        {marqueeView}
      </div>
    </section>
  );
};

export default Technologies;
