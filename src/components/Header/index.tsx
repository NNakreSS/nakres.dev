import { useState } from "react";
// router
import { NavLink } from "react-router-dom";
// logo
import white_logo from "../../assets/logo/nakres_logo_white.svg";
// icons
import lightIcon from "../../assets/icons/lightIcon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

// NavLink check active className
const isNavActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? "bg-zinc-800/50 p-3 rounded-xl text-amber-400" : "p-3";

const isNavActiveBurger = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? "w-full text-center bg-zinc-800 p-3 rounded-xl text-amber-400"
    : "rounded-xl p-3 w-full text-center bg-zinc-800/50";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <header className="min-h-16 w-full border-b-2 border-zinc-800 sticky top-0 backdrop-blur-xl z-10">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 lg:px-20">
        <div id="logo" className="hidden lg:block">
          <img
            src={white_logo}
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

        <div id="dark-mode-toggle">
          <img src={lightIcon} alt="Dark mode moon/sun icon" className="w-14" />
        </div>

        {/* Hamburger menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-5xl rounded-md dark:hover:bg-zinc-800  dark:focus:bg-zinc-800 focus:outline-none"
          >
            {isOpen ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </button>
        </div>
        {/* Hamburger menu button end*/}
      </div>

      {/* hamburger menu */}
      <div
        className={
          "w-full z-20 py-5 lg:hidden container mx-auto " +
          (isOpen ? "flex" : "hidden")
        }
      >
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
      {/* hamburger menu end */}
    </header>
  );
};

export default Header;
