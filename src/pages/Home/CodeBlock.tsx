import { useEffect, useState } from "react";

const CodeBlock = () => {
  const areasOfExpertise: string[] = ["FrontEnd", "BackEnd", "Mobile", "Game"];
  const [indexExpertise, setIndexExpertise] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDelete, setDelete] = useState<boolean>(false);
  const [deltaTime, setDeltaTime] = useState<number>(200);

  useEffect(() => {
    const tick = setInterval(() => {
      // textin tamamını al
      const indexTotext = areasOfExpertise[indexExpertise];
      // textin ekranda gösterilecek olan kısmı , silme modundaysa 1 eksilk , yazma modundaysa 1 ekle
      const updateIntext = isDelete
        ? indexTotext.substring(0, text.length - 1)
        : indexTotext.substring(0, text.length + 1);
      // texti setle
      setText(updateIntext);
      // silme modundaysa her işlem sonrası hızı arttır
      if (isDelete) setDeltaTime((dtime) => dtime / 2);
      // yazma modundaysa ve tüm tüm texti yazdıysa
      if (!isDelete && updateIntext === indexTotext) {
        setDelete(true);
        setDeltaTime(2000);
        // silme modundaysa ve tüm text silindiyse
      } else if (isDelete && updateIntext === "") {
        setDelete(false);
        setDeltaTime(200);
        // yazılacak yazının indexini belirle , mevcut indexi bir arttırarak tüm yazıların sayısı kadarının modunu al;
        setIndexExpertise((index) => ++index % areasOfExpertise.length);
      }
    }, deltaTime);

    // component didmount delete interval
    return () => clearInterval(tick);
  }, [indexExpertise, text]);

  return (
    <div className="w-full lg:w-1/2 bg-card rounded-md box-content">
      <div
        id="code-head"
        className="h-10 w-full bg-card-second rounded-t-md flex items-center cursor-pointer"
      >
        <div className="flex items-center justify-between h-2/4 ml-1 gap-2 bg-background p-4 rounded-sm">
          <span className="font-bold text-yellow-400">JS</span>
          <span>Hello.js</span>
          <span>x</span>
        </div>
      </div>
      <div className="text-2xl xl:text-4xl p-6 flex flex-wrap gap-5">
        <code className="font-bold text-text-second/50 w-full">
          // Selam,ben Serkan
        </code>
        <div className="font-semibold text-green-600 w-full">
          {"{ "}
          <span className="relative">{text}</span>
          <span className="text-text-second anim_pulse">|</span>
          <span> Developer</span>
          {" }"}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
