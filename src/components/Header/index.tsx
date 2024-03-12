import { useState } from "react";
// router
import { NavLink } from "react-router-dom";
// logo
import white_logo from "../../assets/logo/nakres_logo_white.svg";
import black_logo from "../../assets/logo/nakres_logo_black.svg";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { MdLightMode, MdModeNight } from "react-icons/md";
// REDUX
import { themeSelector, toggleDarkMode } from "../../redux/slicers/themeSlice";
import { useSelector, useDispatch } from "react-redux";
// component
import Slide from "../Slide";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const navButtonClass = ({ isActive }: { isActive: boolean }) =>
  classNames(
    "bg-card/30 lg:bg-card/0 p-2 rounded-md w-full text-center font-semibold transition duration-300",
    {
      "text-warning !bg-card": isActive,
    }
  );

const Header = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { darkMode } = useSelector(themeSelector);
  // hamburger menu status
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // hamburger menu open close
  const toggleMenu = () => setIsOpen((prev) => !prev);
  // toggle dark mode button action
  const toggleMode = () => dispatch(toggleDarkMode());

  return (
    <header className="min-h-16 w-full border-b-2 border-border sticky top-0 backdrop-blur-xl z-10 text-text-main">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 lg:px-20">
        <div id="logo">
          <img
            src={darkMode ? white_logo : black_logo}
            alt="NakreS development logo"
            className="w-14"
          />
        </div>

        {/* Large navbar */}
        <nav className="gap-5 items-center justify-between  hidden lg:flex">
          <NavLink to="/" className={navButtonClass}>
            {t("pages.home")}
          </NavLink>
          <NavLink to="/projects" className={navButtonClass}>
            {t("pages.projects")}
          </NavLink>
          <NavLink to="/articles" className={navButtonClass}>
            {t("pages.articles")}
          </NavLink>
          <NavLink to="/contact" className={navButtonClass}>
            {t("pages.contact")}
          </NavLink>
        </nav>
        {/* Large navbar end*/}

        <div
          id="dark-mode-toggle"
          className="cursor-pointer text-3xl"
          onClick={toggleMode}
        >
          {darkMode ? <MdLightMode /> : <MdModeNight />}
        </div>

        {/* Hamburger menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button onClick={toggleMenu} className="text-5xl focus:outline-none">
            {isOpen ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </button>
        </div>
        {/* Hamburger menu button end*/}
      </div>

      {/* hamburger menu */}
      <Slide isOpen={isOpen}>
        <div className="w-full z-20 py-5 px-2 lg:hidden container mx-auto ">
          <nav className="gap-5 grid grid-cols-2  text-md w-full">
            <NavLink to="/" className={navButtonClass}>
              Anasayfa
            </NavLink>
            <NavLink to="/projects" className={navButtonClass}>
              Projelerim
            </NavLink>
            <NavLink to="/articles" className={navButtonClass}>
              Makaleler
            </NavLink>
            <NavLink to="/contact" className={navButtonClass}>
              İletişim
            </NavLink>
          </nav>
        </div>
      </Slide>
      {/* hamburger menu end */}
    </header>
  );
};

export default Header;
