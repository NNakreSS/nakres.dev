import { useTranslation } from "react-i18next";
import Button from "../../components/Button";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 justify-center box-content">
      <h3 className="text-4xl font-bold">{t("contact-title")}</h3>
      <p className="w-full text-center text-xl text-text-second">
        {t("contact-description")}
      </p>
      <Button type="primary" variant="outlined">
        {t("contact")}
      </Button>
    </div>
  );
};

export default CallToAction;
