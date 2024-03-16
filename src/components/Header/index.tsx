import { useState } from "react";
// logo
import white_logo from "../../assets/logo/nakres_logo_white.svg";
import black_logo from "../../assets/logo/nakres_logo_black.svg";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
// REDUX
import { themeSelector } from "../../redux/slicers/themeSlice";
import { useSelector } from "react-redux";
// component
import Slide from "../Slide";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import Settings from "./Settings";

const Header = () => {
  const { darkMode } = useSelector(themeSelector);
  // hamburger menu status
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // hamburger menu open close
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="min-h-16 w-full border-b-2 border-border sticky top-0 backdrop-blur-xl z-10 text-text-main">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 lg:px-20">
        {/* logo  */}
        <div id="logo">
          <img
            src={darkMode ? white_logo : black_logo}
            alt="NakreS development logo"
            className="w-14"
          />
        </div>
        {/* logo end */}

        {/* Large navbar */}
        <Navbar />
        {/* Large navbar end*/}

        {/* setting buttons */}
        <Settings />
        {/* setting buttons end */}

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
          <HamburgerMenu />
        </div>
      </Slide>
      {/* hamburger menu end */}
    </header>
  );
};

export default Header;
