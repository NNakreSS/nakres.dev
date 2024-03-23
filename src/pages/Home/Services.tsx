import { useTranslation } from "react-i18next";
import { ServiceCard } from "../../components/Card";
// icons
import { WebIcon, GameIcon, MobileIcon } from "../../pages/Home/ServiceIcons";

const services = ["mobile", "web", "fivem"];
const icons: any = {
  web: WebIcon,
  mobile: MobileIcon,
  fivem: GameIcon,
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="text-text-main">
      <div className="flex mb-5">
        <h3 className="text-2xl lg:text-4xl font-semibold ">{t("services")}</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            Image={icons[service]}
            key={index}
            title={t(`my-services.${service}.title`)}
            description={t(`my-services.${service}.description`)}
            className="w-full p-5  min-h-60 flex flex-col gap-10 justify-stretch shadow-inner shadow-black/20 hover:scale-105 duration-500"
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
