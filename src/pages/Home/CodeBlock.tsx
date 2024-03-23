import { useTranslation } from "react-i18next";
import Typing from "../../components/Typing";

const CodeBlock = () => {
  const { t } = useTranslation();

  const areasOfExpertise: string[] = [
    t("expertise.frontend"),
    t("expertise.backend"),
    t("expertise.mobile"),
    t("expertise.game"),
  ];

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
          // {t("hello")}
        </code>
        <div className="font-semibold text-green-600 w-full">
          {"{ "}
          <Typing textArr={areasOfExpertise} className="relative" />
          <span className="text-text-second anim_pulse mr-3">|</span>
          <span>{t("dev")}</span>
          {" }"}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
