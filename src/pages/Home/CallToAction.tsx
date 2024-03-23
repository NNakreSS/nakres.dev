import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 justify-center box-content">
      <h3 className="text-4xl font-bold">{t("contact-title")}</h3>
      <p className="w-full text-center text-xl text-text-second">
        {t("contact-description")}
      </p>
      <Link to="/contact" className="w-6/12">
        <Button
          type="primary"
          variant="outlined"
          className="active:scale-110 duration-100 w-full"
        >
          {t("contact")}
        </Button>
      </Link>
    </div>
  );
};

export default CallToAction;
