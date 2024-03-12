import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// type
import INavItem from "../../interfaces/INavItem";
// utils
import { navButtonClass } from "./utils";

const Navbar: React.FC<{ navItems: INavItem[] }> = ({ navItems }) => {
  const { t } = useTranslation();

  return (
    <nav className="gap-5 items-center justify-between hidden lg:flex">
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.path} className={navButtonClass}>
          {t(item.key)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
