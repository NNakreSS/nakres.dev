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

// NavLink check active className
const isNavActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? "bg-card/50 p-3 rounded-xl text-warning" : "p-3";

const isNavActiveBurger = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? "w-full text-center bg-card p-3 rounded-xl text-warning"
    : "rounded-xl p-3 w-full text-center bg-card/50";

const Header = () => {
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
        <nav className="gap-5 items-center justify-between font-bold text-md hidden lg:flex">
          <NavLink to="/" className={isNavActive}>
            Anasayfa
          </NavLink>
          <NavLink to="/projects" className={isNavActive}>
            Projelerim
          </NavLink>
          <NavLink to="/articles" className={isNavActive}>
            Makaleler
          </NavLink>
          <NavLink to="/contact" className={isNavActive}>
            İletişim
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
          <nav className="gap-5 grid grid-cols-2 font-bold text-md w-full">
            <NavLink to="/" className={isNavActiveBurger}>
              Anasayfa
            </NavLink>
            <NavLink to="/projects" className={isNavActiveBurger}>
              Projelerim
            </NavLink>
            <NavLink to="/articles" className={isNavActiveBurger}>
              Makaleler
            </NavLink>
            <NavLink to="/contact" className={isNavActiveBurger}>
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
