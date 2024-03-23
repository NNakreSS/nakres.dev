import { useEffect, useState } from "react";

const Typing: React.FC<{ textArr: string[]; className: string }> = ({
  textArr,
  className,
}) => {
  const [textIndex, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDelete, setDelete] = useState<boolean>(false);
  const [deltaTime, setDeltaTime] = useState<number>(200);

  useEffect(() => {
    const tick = setInterval(() => {
      // textin tamamını al
      const indexTotext = textArr[textIndex];
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
        setIndex((index) => ++index % textArr.length);
      }
    }, deltaTime);

    // component didmount delete interval
    return () => clearInterval(tick);
  }, [textIndex, text]);

  return <span className={className}>{text}</span>;
};

export default Typing;
