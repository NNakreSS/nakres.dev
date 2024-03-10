import { useState } from "react";
// components
import Marquee from "../../components/Marquee";
import { TechnologieCard } from "../../components/Card";
// icons
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const myTechlonogies = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "tailwind",
  "nodejs",
  "lua",
  "c-sharp",
  "dart",
  "flutter",
];

const Technologies = () => {
  const [isCardView, setIsCardView] = useState<boolean>(true);
  const toggleCardPreview = () => setIsCardView((prev) => !prev);

  return (
    <section id="technologies">
      <div className="flex items-center justify-start gap-5 mb-5 font-semibold">
        <h3 className="text-3xl">Teknolojiler</h3>
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
      {isCardView ? (
        <article
          id="techCards"
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {myTechlonogies.map((tech, index) => (
            <TechnologieCard
              className="w-full p-5 gap-5 text-xl lg:text-2xl bg-zinc-800 rounded-md shadow-xl shadow-black hover:scale-105 duration-300"
              key={index}
              imgSrc={`icons/techlonogies/${tech}.svg`}
              title={tech.toUpperCase()}
            />
          ))}
        </article>
      ) : (
        <article id="techMarquee">
          <Marquee className="w-full border-y-2 border-zinc-800 py-5 box-content select-none">
            {myTechlonogies.map((tech, index) => {
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
      )}
    </section>
  );
};

export default Technologies;
