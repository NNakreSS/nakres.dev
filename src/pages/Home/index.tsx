// components
import CallToAction from "./CallToAction";
import CodeBlock from "./CodeBlock";
import Technologies from "./Technologies";
import Services from "./Services";
// framer motion
import { motion } from "framer-motion";
// helmet
import { Helmet } from "react-helmet";
// translate
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      className="flex flex-col gap-4 gap-y-40"
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Helmet>
        <title>{t("pages.home")}</title>
        <meta name="descriptipn" content={t("descriptions.home")} />
      </Helmet>
      <div className="flex w-full flex-col gap-28 lg:gap-10 lg:flex-row text-text-main">
        <CodeBlock />
        <CallToAction />
      </div>
      <Technologies />
      <Services />
    </motion.section>
  );
};

export default Home;
