import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// type
import INavItem from "../../interfaces/INavItem";
// utils
import { navButtonClass } from "./utils";
import classNames from "classnames";

const Navbar: React.FC<{ navItems: INavItem[] }> = ({ navItems }) => {
  const { t } = useTranslation();
  const gridColumsTemplate = `grid-cols-[repeat(${navItems.length},1fr)]`;

  return (
    <nav className={classNames("gap-2 hidden lg:grid", gridColumsTemplate)}>
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.path} className={navButtonClass}>
          {t(item.key)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
