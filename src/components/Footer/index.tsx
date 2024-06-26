import { FiMail, FiMapPin } from "react-icons/fi";
import {
  FaGithub,
  FaYoutube,
  FaInstagramSquare,
  FaShoppingCart,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t-2 mt-20 text-text-main">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between  gap-3 py-8 px-2 lg:px-20">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h5 className="text-lg font-bold mb-2">{t("contact-information")}</h5>
          <div className="flex items-center mb-2">
            <FiMapPin className="mr-2" />
            <p>Gaziantep, Türkiye</p>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <p>nakresdevelopment@gmail.com</p>
          </div>
        </div>
        <div>
          <span>{t("copyright")}</span>
        </div>
        <div className="flex flex-row gap-3 text-2xl lg:text-4xl text-text-second">
          <a
            href="https://github.com/NNakreSS"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-main hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkHHGxb-5Dun5xcBRZM9CEQ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/nakresdev/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/serkanb.a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 hover:scale-110 duration-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://nakres-development.tebex.io/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 duration-300"
          >
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
