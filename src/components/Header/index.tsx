// router
import { NavLink } from "react-router-dom";
// logo
import white_logo from "../../assets/logo/nakres_logo_white.svg";
// icons
import lightIcon from "../../assets/icons/lightIcon.svg";

// NavLink check active className
const isNavActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? "bg-zinc-800/50 p-3 rounded-xl text-amber-400" : "p-3";

const Header = () => (
  <header className="flex items-center justify-between h-16 w-full border-b-2 border-zinc-800">
    <div id="logo">
      <img src={white_logo} alt="NakreS development logo" className="w-14" />
    </div>
    <nav className="flex gap-5 items-center justify-between font-bold text-md">
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
    <div id="dark-mode-toggle">
      <img src={lightIcon} alt="Dark mode moon/sun icon" className="w-14" />
    </div>
  </header>
);

export default Header;
