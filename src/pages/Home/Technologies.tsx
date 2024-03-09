import Marque from "../../components/Marque";

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
    <Marque>
      {myTechlonogies.map((tech, index) => {
        return (
          <img
            key={index}
            className="w-28"
            src={"icons/techlonogies/" + tech + ".svg"}
          />
        );
      })}
    </Marque>
  );
};

export default Technologies;
