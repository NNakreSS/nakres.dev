import { useState } from "react";
import Marquee from "../../components/Marquee";
// icons
import { CiSquareChevDown } from "react-icons/ci";
import { TechnologieCard } from "../../components/Card";

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
      <CiSquareChevDown
        onClick={toggleCardPreview}
        className="mx-auto mb-5 text-4xl text-blue-400 cursor-pointer"
      />
      {isCardView ? (
        <article
          id="techCards"
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {myTechlonogies.map((tech, index) => (
            <TechnologieCard
              className="w-full p-5 gap-5 text-xl lg:text-2xl bg-zinc-800 rounded-md shadow-xl shadow-black"
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
