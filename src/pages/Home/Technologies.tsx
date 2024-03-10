import Marquee from "../../components/Marquee";

const Technologies = () => {
  const myTechlonogies = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "tailwind",
    "nodejs",
    "c-sharp",
    "dart",
    "flutter",
  ];
  return (
    <Marquee className="w-full border-y-2 border-zinc-800 py-5 box-content">
      {myTechlonogies.map((tech, index) => {
        return (
          <img
            key={index}
            className="w-14 lg:w-28 mx-5 lg:mx-10"
            src={"icons/techlonogies/" + tech + ".svg"}
          />
        );
      })}
    </Marquee>
  );
};

export default Technologies;
